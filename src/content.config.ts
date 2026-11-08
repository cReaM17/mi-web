import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIAS } from './data/categorias-nombres';

/**
 * Esquema de una ficha de proyecto. Coincide con la plantilla de
 * material/contenido-web.md y buzon/plantilla.md:
 *
 * ---
 * titulo: ...
 * cliente: ...
 * fecha: AAAA-MM            (o AAAA-MM-DD)
 * categoria: Baja Tensión   (una de CATEGORIAS)
 * etiquetas: [a, b]
 * enlace: ""                (URL o vacío)
 * destacado: false
 * imagenes:                 (opcional; si falta se usa la ilustración de la categoría)
 *   - src: ./carpeta/foto.jpg
 *     alt: Descripción de la foto
 * ---
 * Reto: ...
 * Solución: ...
 * Resultado: ...
 */
const proyectos = defineCollection({
  loader: glob({ base: './src/content/proyectos', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string().min(5),
      cliente: z.string().min(1),
      fecha: z
        .union([z.date(), z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/, 'Formato AAAA-MM o AAAA-MM-DD')])
        .transform((v) => (v instanceof Date ? v : new Date(v.length === 7 ? `${v}-01` : v))),
      categoria: z.enum(CATEGORIAS),
      etiquetas: z.array(z.string().regex(/^[a-z0-9-]+$/, 'Etiquetas en minúsculas y con guiones')).default([]),
      enlace: z.union([z.literal(''), z.url()]).default(''),
      destacado: z.boolean().default(false),
      imagenes: z
        .array(
          z.object({
            src: image(),
            alt: z.string().trim().min(5, 'Toda imagen necesita un texto alternativo (alt)'),
          }),
        )
        .default([]),
    }),
});

export const collections = { proyectos };
