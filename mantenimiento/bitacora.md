# Bitácora de mantenimiento

Cada ejecución (manual o programada) añade una entrada al final, con fecha y hora de
Madrid. Formato: qué se revisó · qué se cambió · resultado de `npm run check` y
`npm run build` · pendientes.

---

## 2026-11-08 20:48 · Creación inicial de la web

**Hecho**
- Web completa en Astro 7.4.7 + TypeScript (Node 24.22.2 LTS): inicio, servicios,
  proyectos con filtro, 6 fichas, sobre mí, contacto (+ página de gracias), aviso legal,
  privacidad y 404.
- Contenido tomado solo de `material/contenido-web.md`. Paleta y logo provisional a partir
  de `material/tarjeta.png` (renombrado desde `tarjeta.png.png`).
- 6 ilustraciones SVG de categoría (estilo del logo) usadas como imagen de fichas y servicios.
- SEO (títulos y descripciones del material, canónicas, Open Graph, sitemap, robots,
  JSON-LD Person + ProfessionalService + Service + CreativeWork), `_headers` con CSP.
- Buzón, CLAUDE.md, README, flujos `ci.yml` y `salud-semanal.yml`.

**Comprobaciones**
- `npm run check`: ✓ (0 errores de tipos, contenido válido, 15 páginas sin enlaces
  internos rotos y todas las imágenes con `alt`).
- `npm run build`: ✓
- Lighthouse móvil (local): 99–100 en rendimiento, accesibilidad, buenas prácticas y SEO.

**Pendientes** (se ven en la web resaltados en amarillo)
1. NIF para el aviso legal y la privacidad.
2. Domicilio profesional (en los proyectos figura C/ Fernández de la Hoz 58, 28010 Madrid).
3. URL exacta del perfil de LinkedIn.
4. Logo oficial en SVG (o PNG con fondo transparente); ahora hay un monograma provisional.
5. Retrato para «Sobre mí» (`material/retrato.jpg`).
6. Fotos reales de proyectos (mientras tanto, ilustraciones de categoría).
7. Ficha de Navalcarnero: confirmar el papel de David (el proyecto lo firma otro técnico) o quitarla.
8. Ficha de 2,29 MW: confirmar que la apertura y tramitación ante i-DE fue suya.
9. Permiso de clientes para aparecer con su nombre (ahora «confidencial»).
10. Revisión del aviso legal y la política de privacidad por la gestoría.
11. Confirmar el proveedor del formulario (Web3Forms) y configurar sus variables en Cloudflare.

**Nota**: el material marcaba el n.º de colegiado del COIT como pendiente; se usa
**C21748**, el que David dio en el encargo.
