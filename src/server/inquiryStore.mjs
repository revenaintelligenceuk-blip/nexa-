import { mkdir, appendFile } from 'fs/promises';
import path from 'path';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.jsonl');

function validate(payload) {
  const required = ['name', 'club', 'contact'];
  const missing = required.filter((key) => !payload?.[key] || !String(payload[key]).trim());
  if (missing.length) {
    throw new Error(`Missing required field(s): ${missing.join(', ')}`);
  }
}

async function notifyByEmail(record) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL || 'Nexa Site <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.warn('[inquiry] RESEND_API_KEY / INQUIRY_TO_EMAIL not set — inquiry saved to disk only, no email sent.');
    return;
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New Nexa inquiry — ${record.name} (${record.club})`,
      text: [
        `Source: ${record.source}`,
        `Name / Title: ${record.name}`,
        `Club / Championship: ${record.club}`,
        `Contact: ${record.contact}`,
        `Notes: ${record.message || '—'}`,
        `Received: ${record.receivedAt}`,
      ].join('\n'),
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('[inquiry] Resend email failed:', res.status, body);
  }
}

export async function saveInquiry(payload) {
  // Honeypot — a hidden field real visitors never see or fill. A non-empty
  // value means whatever submitted this skipped the browser entirely, so we
  // report success without writing anything or tipping it off.
  if (payload?.website) {
    return {
      name: String(payload.name ?? '').trim(),
      club: String(payload.club ?? '').trim(),
      contact: String(payload.contact ?? '').trim(),
      message: '',
      source: 'discarded-honeypot',
      receivedAt: new Date().toISOString(),
    };
  }

  validate(payload);

  const record = {
    name: String(payload.name).trim(),
    club: String(payload.club).trim(),
    contact: String(payload.contact).trim(),
    message: payload.message ? String(payload.message).trim() : '',
    source: payload.source === 'hero-modal' ? 'hero-modal' : 'cta-section',
    receivedAt: new Date().toISOString(),
  };

  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(DATA_FILE, JSON.stringify(record) + '\n', 'utf8');

  // Best-effort — a failed notification shouldn't fail the submission, the lead is already on disk.
  try {
    await notifyByEmail(record);
  } catch (err) {
    console.error('[inquiry] notifyByEmail threw:', err);
  }

  return record;
}
