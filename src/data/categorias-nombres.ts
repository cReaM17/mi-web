/**
 * Nombres de categoría válidos para el campo `categoria` de cada ficha.
 * Si añades una categoría nueva, añade también su ilustración en
 * src/assets/ilustraciones/ y su entrada en src/data/categorias.ts.
 */
export const CATEGORIAS = [
  'Baja Tensión',
  'Media Tensión',
  'ICT',
  'Fotovoltaica',
  'Licencias',
  'Eficiencia Energética',
] as const;

export type Categoria = (typeof CATEGORIAS)[number];
