import os
from datetime import datetime

from authlib.integrations.starlette_client import OAuth
from fastapi import APIRouter, Depends, HTTPException, Request, Response
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session as DBSession

from db import get_db
from models import Session as SessionModel
from models import User, new_session_expiry

GOOGLE_CLIENT_ID = os.environ["GOOGLE_CLIENT_ID"]
GOOGLE_CLIENT_SECRET = os.environ["GOOGLE_CLIENT_SECRET"]
GOOGLE_REDIRECT_URI = os.environ["GOOGLE_REDIRECT_URI"]
FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:5173")
OWNER_EMAIL = os.environ["OWNER_EMAIL"].strip().lower()
ALLOWED_EMAILS = {
    e.strip().lower() for e in os.environ.get("ALLOWED_EMAILS", "").split(",") if e.strip()
} | {OWNER_EMAIL}
COOKIE_SECURE = os.environ.get("COOKIE_SECURE", "false").lower() == "true"
SESSION_COOKIE = "rydberg_session"

oauth = OAuth()
oauth.register(
    name="google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)

router = APIRouter(prefix="/auth", tags=["auth"])


@router.get("/login")
async def login(request: Request):
    return await oauth.google.authorize_redirect(request, GOOGLE_REDIRECT_URI)


@router.get("/callback")
async def callback(request: Request, db: DBSession = Depends(get_db)):
    token = await oauth.google.authorize_access_token(request)
    userinfo = token.get("userinfo")
    if not userinfo or not userinfo.get("email_verified"):
        raise HTTPException(status_code=401, detail="Google account email not verified")

    email = userinfo["email"].strip().lower()
    if email not in ALLOWED_EMAILS:
        return RedirectResponse(f"{FRONTEND_URL}/?error=not_allowed")

    role = "owner" if email == OWNER_EMAIL else "guest"
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        user = User(email=email, name=userinfo.get("name"), picture=userinfo.get("picture"), role=role)
        db.add(user)
    else:
        user.name = userinfo.get("name")
        user.picture = userinfo.get("picture")
        user.role = role
    db.commit()
    db.refresh(user)

    session = SessionModel(user_id=user.id, expires_at=new_session_expiry())
    db.add(session)
    db.commit()
    db.refresh(session)

    response = RedirectResponse(FRONTEND_URL)
    response.set_cookie(
        SESSION_COOKIE,
        str(session.id),
        httponly=True,
        secure=COOKIE_SECURE,
        samesite="lax",
        max_age=14 * 24 * 3600,
        path="/",
    )
    return response


def _get_session_user(request: Request, db: DBSession) -> User | None:
    session_id = request.cookies.get(SESSION_COOKIE)
    if not session_id:
        return None
    session = db.query(SessionModel).filter(SessionModel.id == session_id).first()
    if session is None or session.expires_at < datetime.utcnow():
        return None
    return db.query(User).filter(User.id == session.user_id).first()


def require_user(request: Request, db: DBSession = Depends(get_db)) -> User:
    """Any logged-in, allowlisted user (owner or guest)."""
    user = _get_session_user(request, db)
    if user is None:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return user


def require_owner(user: User = Depends(require_user)) -> User:
    """Only the owner account may hit routes guarded by this dependency."""
    if user.role != "owner":
        raise HTTPException(status_code=403, detail="Owner access required")
    return user


@router.get("/me")
def me(user: User = Depends(require_user)):
    return {"email": user.email, "name": user.name, "picture": user.picture, "role": user.role}


@router.post("/logout")
def logout(request: Request, response: Response, db: DBSession = Depends(get_db)):
    session_id = request.cookies.get(SESSION_COOKIE)
    if session_id:
        db.query(SessionModel).filter(SessionModel.id == session_id).delete()
        db.commit()
    response.delete_cookie(SESSION_COOKIE, path="/")
    return {"ok": True}
