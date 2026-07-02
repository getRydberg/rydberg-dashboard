# One-time server setup — per-container sparse checkout

Goal: each container has its own git clone of the SAME repo, but only sees
its own folder on disk. `git pull` inside `rydberg-backend` only ever touches
backend files; `rydberg-frontend` never sees backend code and vice versa.

Run these ON THE SERVER (host, or inside the container after first boot —
either works, whichever is more natural for your setup).

## Backend container

```bash
git clone --no-checkout https://github.com/<you>/rydberg.git backend-repo
cd backend-repo
git sparse-checkout init --cone
git sparse-checkout set backend
git checkout main
```

Disk now only has `backend-repo/backend/` populated (plus root files like
docker-compose.yml, which you generally won't need inside this container).

## Frontend container

```bash
git clone --no-checkout https://github.com/<you>/rydberg.git frontend-repo
cd frontend-repo
git sparse-checkout init --cone
git sparse-checkout set frontend
git checkout main
```

## Day-to-day update loop

```bash
# on your laptop
git add .
git commit -m "..."
git push

# on the server, inside whichever container changed
git pull            # only pulls that container's own folder
# then restart the process / container so the new code takes effect
docker compose restart backend    # or frontend
```

## Notes

- Local dev machine: do a normal full `git clone` (no sparse-checkout) so
  `docker compose up --build` can see and build both services together.
- If a commit touches BOTH frontend and backend, pull in both containers.
- Sparse-checkout is entirely a client-side git feature — the GitHub repo
  itself doesn't need any special setup for this to work.
