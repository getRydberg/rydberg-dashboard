import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from auth import router as auth_router
from db import Base, engine

Base.metadata.create_all(bind=engine)

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:5173")
SESSION_SECRET_KEY = os.environ["SESSION_SECRET_KEY"]

app = FastAPI()

# Signs the short-lived OAuth state/nonce cookie used only during the Google
# login handshake. Separate from the long-lived session cookie in auth.py.
app.add_middleware(SessionMiddleware, secret_key=SESSION_SECRET_KEY, same_site="lax")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.get("/health")
def health():
    return {"status": "ok"}
