<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Nexa Sports Management

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. (Optional) Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` /
   `INQUIRY_TO_EMAIL` if you want contact-form submissions emailed to you.
   Without these, submissions are still saved to `data/inquiries.jsonl`.
3. Run the app:
   `npm run dev`

The contact forms (`Player Liaison` in the nav, and the form in the closing
section) POST to `/api/inquiry`, which is handled directly by the Vite dev
server in development — no separate process needed.

## Production

1. `npm run build`
2. `npm start` — runs `server.js`, which serves the built `dist/` folder and
   the same `/api/inquiry` endpoint.
