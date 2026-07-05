import uuid
from datetime import datetime, timedelta

from sqlalchemy import Column, DateTime, String
from sqlalchemy.dialects.postgresql import UUID

from db import Base

SESSION_LIFETIME = timedelta(days=14)


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, nullable=False, index=True)
    name = Column(String, nullable=True)
    picture = Column(String, nullable=True)
    # "owner" has full access, "guest" is read-only via require_owner-gated routes.
    role = Column(String, nullable=False, default="guest")
    created_at = Column(DateTime, default=datetime.utcnow)


class Session(Base):
    __tablename__ = "sessions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), nullable=False, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime, nullable=False)


def new_session_expiry() -> datetime:
    return datetime.utcnow() + SESSION_LIFETIME
