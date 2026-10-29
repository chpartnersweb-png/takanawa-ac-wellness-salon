import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site.mjs';

export const prerender = true;

function escapeXml(value: string) {
  const entities: Record<string, string> = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return value.replace(/[<>&"']/g, (character) => entities[character] ?? character);
}

// This LP has one canonical page; section anchors are not separate pages.
export const GET: APIRoute = () => new Response(
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url>',
    `    <loc>${escapeXml(SITE_URL)}</loc>`,
    '  </url>',
    '</urlset>',
    '',
  ].join('\n'),
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
