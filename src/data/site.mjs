// Keep all public URLs on the same production origin.
export const SITE_URL = 'https://takanawa-ac-wellness-salon.pages.dev/';

/** @param {string} pathname */
export function canonicalUrl(pathname = '/') {
  const url = new URL(pathname, SITE_URL);
  url.search = '';
  url.hash = '';
  return url.href;
}
