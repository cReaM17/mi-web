#!/usr/bin/env node
// Valida las fichas de src/content/proyectos/ (además del esquema zod de Astro):
// - cuerpo con «Reto:», «Solución:» y «Resultado:» no vacíos
// - imágenes declaradas que existen y tienen alt
// - fecha no futura ni absurda
// Y lista los [PENDIENTE] que quedan en el contenido (aviso, no error).
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';

const raiz = resolve(dirname(new URL(import.meta.url).pathname), '..');
const dirProyectos = join(raiz, 'src/content/proyectos');
const errores = [];
const pendientes = [];

function archivos(dir, ext) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return archivos(p, ext);
    return ext.some((e) => n.endsWith(e)) ? [p] : [];
  });
}

const fichas = archivos(dirProyectos, ['.md']).filter((f) => !f.split('/').pop().startsWith('_'));
if (fichas.length === 0) errores.push('No hay ninguna ficha en src/content/proyectos/.');

const slugs = new Set();
for (const f of fichas) {
  const rel = relative(raiz, f);
  const texto = readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(texto);
  if (!m) {
    errores.push(`${rel}: falta la cabecera entre líneas ---`);
    continue;
  }
  const [, cabecera, cuerpo] = m;
  const slug = f.split('/').pop().replace(/\.md$/, '');
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    errores.push(`${rel}: el nombre del archivo debe ir en minúsculas, sin tildes y con guiones`);
  }
  if (slugs.has(slug)) errores.push(`${rel}: nombre de archivo repetido`);
  slugs.add(slug);

  for (const campo of ['titulo', 'cliente', 'fecha', 'categoria', 'etiquetas', 'enlace', 'destacado']) {
    if (!new RegExp(`^${campo}:`, 'm').test(cabecera)) errores.push(`${rel}: falta el campo «${campo}»`);
  }

  const fecha = /^fecha:\s*["']?(\d{4})-(\d{2})/m.exec(cabecera);
  if (fecha) {
    const anio = Number(fecha[1]);
    const ahora = new Date();
    const valor = anio * 12 + Number(fecha[2]);
    if (anio < 2000 || valor > ahora.getUTCFullYear() * 12 + ahora.getUTCMonth() + 1) {
      errores.push(`${rel}: fecha fuera de rango (${fecha[1]}-${fecha[2]})`);
    }
  }

  for (const etiqueta of ['Reto', 'Soluci[oó]n', 'Resultado']) {
    const re = new RegExp(`^\\s*\\**${etiqueta}\\**\\s*:\\s*(\\S.*)`, 'mi');
    if (!re.test(cuerpo)) errores.push(`${rel}: falta «${etiqueta.replace('[oó]', 'ó')}:» con texto`);
  }

  // Imágenes: cada src debe existir y llevar alt.
  const bloque = /^imagenes:\s*\n((?:[ \t]+.*\n?)*)/m.exec(cabecera)?.[1] ?? '';
  const items = bloque.split(/\n\s*-\s+/).map((s) => s.trim()).filter(Boolean);
  for (const item of items) {
    const src = /src:\s*["']?([^"'\n]+)["']?/.exec(item)?.[1]?.trim();
    const alt = /alt:\s*["']?([^"'\n]*)["']?/.exec(item)?.[1]?.trim();
    if (!src) continue;
    if (!existsSync(resolve(dirname(f), src))) errores.push(`${rel}: no existe la imagen ${src}`);
    if (!alt || alt.length < 5) errores.push(`${rel}: la imagen ${src} no tiene texto alternativo (alt)`);
  }

  for (const p of texto.match(/\[PENDIENTE[^\]]*\]/g) ?? []) pendientes.push(`${rel}: ${p}`);
}

// [PENDIENTE] en el resto del código fuente (textos de páginas y datos).
for (const f of archivos(join(raiz, 'src'), ['.astro', '.ts'])) {
  const texto = readFileSync(f, 'utf8');
  for (const p of texto.match(/\[PENDIENTE: [^\]]+\]/g) ?? []) {
    if (!p.includes('...')) pendientes.push(`${relative(raiz, f)}: ${p}`);
  }
}

console.log(`Fichas revisadas: ${fichas.length}`);
if (pendientes.length) {
  console.log(`\nMarcadores [PENDIENTE] (${pendientes.length}):`);
  for (const p of [...new Set(pendientes)]) console.log(`  · ${p}`);
}
if (errores.length) {
  console.error(`\n✗ ${errores.length} error(es) de contenido:`);
  for (const e of errores) console.error(`  · ${e}`);
  process.exit(1);
}
console.log('\n✓ Contenido válido');
