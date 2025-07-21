# AI Browser Extension Studio

This repository contains a minimal prototype implementing the **Interactive AI Chat Assistant**.

## Directories

- `server` – Express backend exposing `/api/chat` which proxies requests to OpenAI.
- `client` – React + TypeScript frontend with TailwindCSS.

## Development

1. Create a `.env` file inside `server/` with `OPENAI_API_KEY=YOUR_KEY`.
2. Run the provided helper script which installs dependencies if needed and starts both parts:
   ```bash
   ./start.sh
   ```

If the environment lacks internet access, install the npm packages for both `client` and `server` directories manually before running the script.

The frontend includes a floating chat widget that communicates with the backend for context‑aware assistance.
