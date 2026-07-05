# One-time server setup

## Docker Compose
```bash
# postgres + backend + frontend (no vLLM)
docker compose up -d 
# everything including vLLM
docker compose --profile inference up -d 
# whole stack status
docker compose ps
# stop everything
docker compose --profile inference down     
```
