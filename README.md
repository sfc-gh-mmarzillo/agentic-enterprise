# Agentic Enterprise — Strategy Deck

Interactive slide deck deployed as a Snowpark Container Services (SPCS) app on Snowhouse.

## Local dev

```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploy

Push to `main` → GitHub Actions builds the Docker image, pushes to the Snowhouse image registry, and restarts the SPCS service automatically.

**Required GitHub secret:** `SNOWFLAKE_PASSWORD` — your Snowflake password for `MMARZILLO` on `SFCOGSOPS-SNOWHOUSE_AWS_US_WEST_2`.

Add it at: **Settings → Secrets and variables → Actions → New repository secret**

## Stack

- React + Vite + Tailwind (Framer Motion for animations)
- Nginx serving the static build
- Docker → Snowflake image registry → SPCS
