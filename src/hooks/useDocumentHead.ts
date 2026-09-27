import { useEffect } from 'react';

export const SITE_URL = 'https://nexasportsmanagement.com';
const SITE_NAME = 'Nexa Sports Management';

interface DocumentHeadOptions {
  /** Page title. On the homepage ("/") this is used as-is; every other route gets " | Nexa Sports Management" appended. */
  title: string;
  description: string;
  path: string;
  /** Set false to skip applying this call — e.g. a parent component that only owns the head when a sibling route isn't active. Defaults to true. */
  enabled?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Keeps <title>, meta description, canonical link, and OG/Twitter tags in sync
 * with the current route. This is a client-rendered SPA (no SSR) — index.html
 * only ships the homepage's defaults, so every other route needs to patch the
 * <head> itself once React mounts and the router resolves the path.
 */
export function useDocumentHead({ title, description, path, enabled = true }: DocumentHeadOptions) {
  useEffect(() => {
    if (!enabled) return;
    const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertLink('canonical', url);
  }, [title, description, path, enabled]);
}
