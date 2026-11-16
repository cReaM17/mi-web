// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia SITE_URL (variable de entorno) cuando tengas dominio propio.
const site = process.env.SITE_URL ?? 'https://mi-web.pages.dev';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Todo el CSS en archivos externos: permite una CSP estricta sin 'unsafe-inline'.
    inlineStylesheets: 'never',
  },
  image: {
    // Solo para generar las imágenes PNG de redes sociales a partir de nuestras ilustraciones SVG.
    dangerouslyProcessSVG: true,
  },
  vite: {
    build: {
      // No incrustar recursos en base64: mejor caché y CSP más simple.
      assetsInlineLimit: 0,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contacto/gracias/'),
    }),
  ],
});
