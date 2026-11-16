#!/usr/bin/env node
// Comprueba el sitio compilado (dist/):
// - todos los enlaces y recursos internos apuntan a archivos que existen
// - los anclajes (#id) existen en la página de destino
// - toda <img> tiene atributo alt
// - cada página tiene <title>, meta description y canonical, y no se repiten
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';

const raiz = resolve(dirname(new URL(import.meta.url).pathname), '..');
const dist = join(raiz, 'dist');
if (!existsSync(dist)) {
  console.error('✗ No existe dist/. Ejecuta antes «npm run build».');
  process.exit(1);
}

function html(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return html(p);
    return n.endsWith('.html') ? [p] : [];
  });
}

const paginas = html(dist);
const errores = [];
const ids = new Map();
const titulos = new Map();
const descripciones = new Map();

const idsDe = (archivo) => {
  if (!ids.has(archivo)) {
    const t = readFileSync(archivo, 'utf8');
    ids.set(archivo, new Set([...t.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return ids.get(archivo);
};

function destino(url, desde) {
  const limpio = decodeURIComponent(url.split('#')[0].split('?')[0]);
  let p = limpio.startsWith('/') ? join(dist, limpio) : resolve(dirname(desde), limpio);
  if (limpio === '' ) return desde;
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  else if (!existsSync(p) && existsSync(p + '.html')) p += '.html';
  return p;
}

for (const pagina of paginas) {
  const rel = '/' + relative(dist, pagina);
  const t = readFileSync(pagina, 'utf8');
  const sinScripts = t.replace(/<script[\s\S]*?<\/script>/g, '');

  const titulo = /<title>([^<]*)<\/title>/.exec(t)?.[1];
  const desc = /<meta name="description" content="([^"]*)"/.exec(t)?.[1];
  if (!titulo) errores.push(`${rel}: falta <title>`);
  if (!desc) errores.push(`${rel}: falta meta description`);
  if (!/<link rel="canonical"/.test(t)) errores.push(`${rel}: falta URL canónica`);
  if (!/<html lang="es"/.test(t)) errores.push(`${rel}: falta lang="es"`);
  if (titulo) titulos.set(titulo, [...(titulos.get(titulo) ?? []), rel]);
  if (desc) descripciones.set(desc, [...(descripciones.get(desc) ?? []), rel]);

  for (const m of sinScripts.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt(="|[\s/>])/.test(m[0])) errores.push(`${rel}: imagen sin alt → ${m[0].slice(0, 90)}`);
  }

  const urls = [];
  for (const m of sinScripts.matchAll(/\s(?:href|src)="([^"]+)"/g)) urls.push(m[1]);
  for (const m of sinScripts.matchAll(/\ssrcset="([^"]+)"/g)) {
    for (const parte of m[1].split(',')) urls.push(parte.trim().split(/\s+/)[0]);
  }
  for (const m of t.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)) urls.push(m[1]);

  for (const url of urls) {
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(url)) continue;
    const archivo = destino(url, pagina);
    if (!existsSync(archivo)) {
      errores.push(`${rel}: enlace interno roto → ${url}`);
      continue;
    }
    const ancla = url.includes('#') ? url.split('#')[1] : '';
    if (ancla && archivo.endsWith('.html') && !idsDe(archivo).has(ancla)) {
      errores.push(`${rel}: el anclaje #${ancla} no existe en ${url}`);
    }
  }
}

for (const [valor, lista] of [...titulos, ...descripciones]) {
  if (lista.length > 1) errores.push(`Título o descripción repetidos en ${lista.join(', ')}: «${valor.slice(0, 60)}»`);
}

console.log(`Páginas revisadas: ${paginas.length}`);
if (errores.length) {
  console.error(`\n✗ ${errores.length} problema(s):`);
  for (const e of errores) console.error(`  · ${e}`);
  process.exit(1);
}
console.log('✓ Sin enlaces internos rotos, todas las imágenes con alt y metadatos únicos');
