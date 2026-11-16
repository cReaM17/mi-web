import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site ?? 'https://mi-web.pages.dev').href;
  return new Response(`User-agent: *\nAllow: /\nDisallow: /contacto/gracias/\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
