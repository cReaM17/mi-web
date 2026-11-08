import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { INFO_CATEGORIA } from '../data/categorias';

export type Proyecto = CollectionEntry<'proyectos'>;

/** Todos los proyectos, de más reciente a más antiguo. */
export async function proyectosOrdenados(): Promise<Proyecto[]> {
  const todos = await getCollection('proyectos');
  return todos.sort(
    (a, b) => b.data.fecha.getTime() - a.data.fecha.getTime() || a.data.titulo.localeCompare(b.data.titulo, 'es'),
  );
}

export interface Secciones {
  reto: string;
  solucion: string;
  resultado: string;
}

/** Separa el cuerpo de la ficha en Reto, Solución y Resultado. */
export function secciones(cuerpo: string | undefined): Secciones {
  const texto = (cuerpo ?? '').replace(/\r\n/g, '\n').replace(/<!--[\s\S]*?-->/g, '');
  const extraer = (etiqueta: string) => {
    const re = new RegExp(
      `^\\s*\\**${etiqueta}\\**\\s*:\\s*([\\s\\S]*?)(?=^\\s*\\**(?:Reto|Soluci[oó]n|Resultado)\\**\\s*:|$(?![\\s\\S]))`,
      'mi',
    );
    return (re.exec(texto)?.[1] ?? '').trim();
  };
  return {
    reto: extraer('Reto'),
    solucion: extraer('Soluci[oó]n'),
    resultado: extraer('Resultado'),
  };
}

/** Imagen principal: la primera foto de la ficha o, si no hay, la ilustración de su categoría. */
export function imagenPrincipal(p: Proyecto): { src: ImageMetadata; alt: string; esIlustracion: boolean } {
  const primera = p.data.imagenes[0];
  if (primera) return { src: primera.src, alt: primera.alt, esIlustracion: false };
  const info = INFO_CATEGORIA[p.data.categoria];
  return { src: info.ilustracion, alt: info.altIlustracion, esIlustracion: true };
}

/** Hasta `n` proyectos relacionados: misma categoría y etiquetas en común puntúan más. */
export function relacionados(actual: Proyecto, todos: Proyecto[], n = 3): Proyecto[] {
  return todos
    .filter((p) => p.id !== actual.id)
    .map((p) => {
      const comunes = p.data.etiquetas.filter((e) => actual.data.etiquetas.includes(e)).length;
      const puntos = (p.data.categoria === actual.data.categoria ? 2 : 0) + comunes;
      return { p, puntos };
    })
    .filter((x) => x.puntos > 0)
    .sort((a, b) => b.puntos - a.puntos || b.p.data.fecha.getTime() - a.p.data.fecha.getTime())
    .slice(0, n)
    .map((x) => x.p);
}

const formatoFecha = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric', timeZone: 'UTC' });

/** «septiembre de 2026» */
export function fechaLarga(d: Date): string {
  return formatoFecha.format(d);
}

/** «2026-09» para atributos datetime. */
export function fechaIso(d: Date): string {
  return d.toISOString().slice(0, 7);
}
