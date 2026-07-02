# Rydberg — Home Server Agent System

Private, self-hosted AI agent dashboard: job tracking, email triage, news
digest, and budgeting, all running on my own hardware talking to a local LLM.

## Repo layout

```
rydberg/
├── frontend/     React PWA (Vite)
├── backend/      FastAPI + agent runtime
├── e2e/          Playwright end-to-end tests against the full stack
├── docker-compose.yml
└── .github/workflows/   path-filtered CI per service + e2e + image builds
```

## Local dev (full stack)

```bash
git clone https://github.com/<you>/rydberg.git
cd rydberg
cp .env.example .env   # fill in secrets
docker compose up --build
```

Frontend: http://localhost:5173
Backend:  http://localhost:8000

## Server deploy (per-container sparse checkout)

Each container on the home server only checks out its own slice of the repo,
so pulling in one container never touches the other. See `SETUP.md` for the
one-time setup, then it's just:

```bash
docker exec -it rydberg-backend bash -c "git pull"
docker compose restart backend
```

## CI/CD

- `frontend-ci.yml` / `backend-ci.yml` — lint + unit tests, path-filtered so
  a frontend-only commit never triggers backend CI and vice versa.
- `e2e.yml` — boots the full docker-compose stack, runs Playwright against it.
- `docker-build.yml` — on merge to `main`, builds and pushes each service's
  image to GitHub Container Registry (ghcr.io) independently.
