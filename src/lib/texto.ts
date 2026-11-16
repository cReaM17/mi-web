/** Escapa HTML. */
export function escapar(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Devuelve HTML seguro en el que cada marcador [PENDIENTE: ...] queda resaltado
 * con <mark class="pendiente">, para que se vea en la web hasta completarlo.
 */
export function conPendientes(texto: string): string {
  return escapar(texto).replace(
    /\[PENDIENTE[^\]]*\]/g,
    (m) => `<mark class="pendiente">${m}</mark>`,
  );
}

/** Recorta un texto a `max` caracteres sin partir palabras. */
export function recortar(texto: string, max: number): string {
  const limpio = texto.replace(/\s+/g, ' ').trim();
  if (limpio.length <= max) return limpio;
  const corte = limpio.slice(0, max - 1);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '…';
}

/** Quita los marcadores [PENDIENTE: ...] (para metadatos SEO). */
export function sinPendientes(texto: string): string {
  return texto.replace(/\[PENDIENTE[^\]]*\]\s*/g, '').trim();
}
