// Production server: serves the built site and the /api/inquiry endpoint.
// Run after `npm run build`, via `npm start`.
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { saveInquiry } from './src/server/inquiryStore.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

app.post('/api/inquiry', async (req, res) => {
  try {
    const record = await saveInquiry(req.body);
    res.json({ ok: true, record });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

// SPA fallback — anything not matched above serves index.html.
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Nexa Sports Management server listening on port ${port}`);
});
