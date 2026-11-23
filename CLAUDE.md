# CLAUDE.md · Web de DCM (David Clemente Martín)

Guía para Claude Code y sus tareas programadas. Léela entera antes de tocar nada.

## El proyecto

Web portfolio estática de **David Clemente Martín (DCM)**, ingeniero de Telecomunicación
colegiado (COITT n.º 16.980, COIT n.º C21748), autónomo en Madrid. Muestra servicios y
proyectos reales y consigue contactos de clientes. Se publica en **Cloudflare Pages**
desde la rama `main`.

- Astro 7 + TypeScript, CSS propio (sin Tailwind ni frameworks de interfaz).
- Contenido en Markdown con content collections; sin base de datos, servidor ni CMS.
- Node: versión fijada en `.node-version` (24 LTS) y en `engines` de `package.json`.
- Fuente única de textos: `material/contenido-web.md` (y lo que David deje en `buzon/`).
  Cambios posteriores pedidos por David prevalecen sobre el material (ver la bitácora):
  p. ej., el párrafo de «Sobre mí» sobre Iberdrola y ENAIRE se quitó a petición suya
  el 2026-11-23 y no debe volver a añadirse.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm ci` | Instala dependencias exactas del `package-lock.json` |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run build` | Compila la web en `dist/` |
| `npm run preview` | Sirve `dist/` en local |
| `npm run check` | `astro check` + `scripts/validar-contenido.mjs` + build + `scripts/comprobar-enlaces.mjs` (enlaces internos, `alt`, metadatos) |
| `python3 scripts/generar-ilustraciones.py` | Regenera las ilustraciones SVG de categoría |

## Estructura

```
.github/workflows/     ci.yml (push/PR) · salud-semanal.yml (lunes 05:00 UTC)
buzon/                 Entrada de proyectos nuevos (LEEME.md, plantilla.md, procesado/AAAA-MM-DD/)
mantenimiento/         bitacora.md (una entrada por ejecución) · incidencias.md (lo escribe salud-semanal)
material/              Material original de David (contenido-web.md, tarjeta.png, retrato.jpg si existe)
public/                _headers (seguridad), favicon.svg, og-default.png, tema.js
scripts/               validar-contenido.mjs · comprobar-enlaces.mjs · generar-ilustraciones.py
src/assets/ilustraciones/  Una ilustración SVG por categoría
src/components/        Header, Footer, Logo, Seo, JsonLd, ProjectCard, ServiceCard, ContactForm, Imagen…
src/content/proyectos/ Una ficha .md por proyecto (el nombre del archivo es la URL)
src/content.config.ts  Esquema zod de las fichas
src/data/sitio.ts      Textos generales: portada, servicios, sobre mí, SEO por página, datos legales
src/data/categorias*.ts  Categorías válidas y su ilustración
src/lib/               Utilidades (proyectos, texto, JSON-LD)
src/pages/             Páginas: inicio, servicios, proyectos, proyectos/[slug], sobre-mi, contacto, aviso-legal, privacidad, 404
src/styles/global.css  Tokens de color, tipografía y componentes comunes
```

## Esquema de ficha (`src/content/proyectos/<slug>.md`)

```markdown
---
titulo: Texto (mín. 5 caracteres)
cliente: Cliente privado (confidencial)
fecha: AAAA-MM            # o AAAA-MM-DD; no puede ser futura
categoria: Baja Tensión   # Baja Tensión | Media Tensión | ICT | Fotovoltaica | Licencias | Eficiencia Energética
etiquetas: [minusculas-con-guiones]
enlace: ""                # URL pública o vacío
destacado: false          # true = aparece en la portada
imagenes:                 # OPCIONAL. Solo fotos aportadas por David
  - src: ./<slug>/foto.jpg
    alt: Descripción de lo que se ve (obligatorio)
    origen: obra          # obra (foto real) | banco (banco de imágenes → pie «Imagen ilustrativa»)
---
Reto: …

Solución: …

Resultado: …
```

- El slug (nombre del archivo) va en minúsculas, sin tildes, con guiones. **No cambies
  slugs existentes**: rompería enlaces.
- Orden en la web: por `fecha`, de más reciente a más antigua.
- Meta descripción de cada ficha: se genera a partir de `Reto` (sin los `[PENDIENTE]`).

## Regla de imágenes (obligatoria)

- **Prioridad de la imagen principal de una ficha**: 1) foto real de obra aportada por
  David; 2) foto de banco de imágenes **aportada por David** (Pexels/Unsplash…);
  3) si no hay ninguna, la **ilustración SVG de su categoría** (`src/assets/ilustraciones/`),
  que se usa automáticamente cuando la ficha no tiene `imagenes:`.
- **Pie de foto**: las fotos de bancos de imágenes llevan **siempre** `origen: banco`, y la
  web les pone el pie discreto **«Imagen ilustrativa»**. Las fotos reales de obra llevan
  `origen: obra` (valor por defecto) y **nunca** llevan ese pie.
- No busques ni descargues fotos por tu cuenta: usa solo las que David deje en `material/`
  o en `buzon/`. Nunca uses imágenes generadas que parezcan fotos reales.
- Los **servicios** usan siempre la ilustración de su categoría.
- Al añadir una foto: redúcela a 2400 px de lado mayor como máximo, cópiala a
  `src/content/proyectos/<slug>/` y declárala en `imagenes:` con `alt` descriptivo
  (describe lo que se ve, no lo que se supone) y su `origen`. La primera es la principal.
  Sin datos personales, matrículas ni direcciones visibles.
- Estilo de las ilustraciones (el del logo): líneas finas con nodos circulares huecos,
  azul `#112E4E` y gris `#748797`, fondo `#F2F5F8`, formato 960×640. Si hace falta una
  categoría nueva, añade su dibujo en `scripts/generar-ilustraciones.py`, su nombre en
  `src/data/categorias-nombres.ts` y su entrada en `src/data/categorias.ts`.
- «Sobre mí» usa `material/retrato.jpg` automáticamente si existe; si no, muestra el
  logo DCM (componente `Logo.astro`, que se adapta al modo oscuro).
- Ninguna imagen sin `alt` (las decorativas llevan `alt=""`).

## Guía de estilo y tono

- **Tono**: profesional y claro. Se **tutea** al visitante. Se cita la norma (REBT,
  ITC-BT-xx, RD 346/2011…) cuando da confianza, sin tecnicismos de relleno.
- **Público**: particulares, comercios y hostelería, naves industriales e instaladores.
- **Zona**: Comunidad de Madrid, Castilla y León y Castilla-La Mancha.
- Cifras con formato español: `100,96 kW`, `2.400 m²`. Fechas: «abril de 2026».
- Clientes y direcciones exactas, anonimizados salvo permiso expreso.
- Colores (tokens en `src/styles/global.css`): azul DCM `#112E4E`, gris circuito
  `#748797` (solo decorativo, nunca texto), ámbar `#F2A33A` (acento), texto `#1C2733`,
  texto secundario `#4E5D6C`. Modo oscuro: fondo `#0B1A2C`, superficie `#13263D`.
- Tipografías alojadas en la web (Fontsource): Barlow 600/700 (títulos) e Inter (texto).
- Accesibilidad WCAG 2.2 AA: contraste, foco visible, teclado, `alt`. Lighthouse móvil ≥ 95.
- Mínimo JavaScript. Nada de scripts ni estilos en línea (la CSP de `public/_headers`
  los bloquearía), nada de recursos de terceros salvo Cloudflare Web Analytics.

## Variables de entorno (Cloudflare Pages → Settings → Variables)

| Variable | Uso |
| --- | --- |
| `SITE_URL` | URL pública sin barra final (por defecto `https://mi-web.pages.dev`) |
| `PUBLIC_FORM_ENDPOINT` | `https://api.web3forms.com/submit` (o URL de Formspree). Vacía = botón de email |
| `PUBLIC_FORM_ACCESS_KEY` | Clave pública de Web3Forms |
| `PUBLIC_CF_ANALYTICS_TOKEN` | Token de Cloudflare Web Analytics. Vacía = sin analítica |

Ninguna es secreta. **Nunca subas secretos al repositorio.**

## Reglas de mantenimiento (tareas programadas)

1. **Nunca publiques en `main` si `npm run check` o `npm run build` fallan.** Deja el
   trabajo en una rama `claude/...`, explica el problema en `mantenimiento/bitacora.md`
   (en esa rama) y **para**.
2. **Dependencias**: actualiza automáticamente solo versiones **menores y de parche**
   (`npm update` respetando los rangos `^` de `package.json`, revisando el diff del lock).
   Las **mayores** no se instalan: se proponen en la bitácora con el enlace a sus notas
   de versión.
3. **No inventes contenido**, **no borres proyectos** y **no cambies los textos legales**
   (aviso legal, privacidad) salvo errores evidentes (erratas, enlaces rotos).
   Lo que falte se marca `[PENDIENTE: ...]`.
4. Procesa el buzón según `buzon/LEEME.md` y mueve los originales a
   `buzon/procesado/AAAA-MM-DD/`.
5. Revisa `mantenimiento/incidencias.md`; si resuelves algo, dilo en la bitácora.
6. **Cada ejecución añade una entrada fechada (hora de Madrid,
   `TZ=Europe/Madrid date '+%F %H:%M'`)** en `mantenimiento/bitacora.md`, aunque no haya
   cambios, con: qué se revisó, qué se cambió, resultado de check/build y pendientes.
7. Commits pequeños y descriptivos en español (`feat(proyectos): …`, `chore(deps): …`,
   `fix: …`). Nunca reescribas el historial de `main`.

## Pendientes conocidos

Están listados en `mantenimiento/bitacora.md` (primera entrada) y se ven en la web
resaltados en amarillo. `node scripts/validar-contenido.mjs` los lista todos.
