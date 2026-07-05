# Rydberg Dashboard

The personal AI agent control center — the first Rydberg module. One
dashboard where agents monitor your email, job applications, news, and
spending, draft what needs drafting, and wait for you to approve anything
that actually goes out.

This module bundles the web UI and its backend together (see
[why](#why-one-module) below) — installing it gets you both.

## What it does

- **Dashboard** — daily briefing, key stats, and the approval queue in one view
- **Job Tracker** — application status tracking, plus an agent-surfaced discovery
  feed of relevant listings
- **Inbox & Approvals** — every pending agent action (drafted email, file move,
  suggested keyword) waits here until you approve or dismiss it
- **News Digest** — a browsable feed of tracked sources, plus what you've saved
- **Budget** — spending by category, income-to-spend flow, transactions with
  receipt photos
- **Tasks & Notes** — a daily timeline and a place to drop raw ideas an agent
  can help revise
- **Agent Activity Log** — an audit trail of everything the agents have done,
  with basic usage stats

The operating principle behind all of it: agents observe, draft, and
organize. You're always the one who approves, sends, or decides.

## Requirements

- Docker + Docker Compose
- A Postgres-compatible environment (bundled — see below)
- An OpenAI-compatible LLM endpoint (e.g. a local [vLLM](https://github.com/vllm-project/vllm)
  server) for agent features to actually do anything. The dashboard runs
  without one, but the agents have nothing to think with.

## Install as a Rydberg module (recommended)

If you're running the [Rydberg core](https://github.com/getRydberg/Rydberg):

```bash
bin/rydberg install dashboard https://github.com/getRydberg/rydberg-dashboard.git main
bin/rydberg up
```

This joins the shared `rydberg-net` network and gets routed automatically
if you've got Cloudflare Tunnel (or another reverse proxy) configured in
core.

## Run standalone

Rydberg Dashboard doesn't require the core repo — it's a complete,
self-contained stack on its own:

```bash
git clone https://github.com/getRydberg/rydberg-dashboard.git
cd rydberg-dashboard
cp .env.example .env      # fill in your values, see below
docker network create rydberg-net   # skip if it already exists
docker compose up -d --build
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:8080`

## Configuration

| Variable | What it's for |
|---|---|
| `DATABASE_URL` | Postgres connection string (bundled Postgres works out of the box) |
| `POSTGRES_USER` / `POSTGRES_PASSWORD` / `POSTGRES_DB` | Bundled database credentials |
| `LLM_BASE_URL` | Your OpenAI-compatible inference endpoint |
| `LLM_MODEL` | Which model to request from that endpoint |
| `GMAIL_CLIENT_ID` / `GMAIL_CLIENT_SECRET` | OAuth credentials for email monitoring |
| `VITE_API_BASE_URL` | Where the frontend should reach the backend |

See `.env.example` for a filled-out template.

## Architecture

```
rydberg-dashboard/
├── frontend/     React (Vite + TypeScript) PWA
├── backend/      FastAPI — agent logic, API, integrations
└── docker-compose.yml   frontend + backend + postgres, all on rydberg-net
```

Agent behavior (email triage, job matching, digest generation) runs
through the backend, calling out to whatever LLM endpoint you've
configured. Nothing here is hardcoded to a specific model or provider —
any OpenAI-compatible API works.

## Why one module

The dashboard and its backend are shipped together rather than as
separate modules, because the dashboard has no purpose without an API to
talk to, and the API has no reason to exist without something using it.
Splitting things that are never deployed independently just creates ways
to end up half-installed for no benefit — see the core repo's
`MODULE_CONTRACT.md` for the actual reasoning.

## Status

Early and actively evolving. The infrastructure (frontend, backend,
database, LLM inference) is wired up and working; most of the agent
features described above are still being built out. Expect rough edges.

## License

  [AGPL-3.0](LICENSE) — if you run a modified version of this as a
  network service, you're required to make your modified source
  available to users interacting with it. See the LICENSE file for
  full terms.