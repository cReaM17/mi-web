# Web de DCM · David Clemente Martín

Web profesional de David Clemente Martín, ingeniero de Telecomunicación. Se publica
sola en **Cloudflare Pages** cada vez que cambia la rama `main` de este repositorio.

Todo se puede hacer desde la web de GitHub, sin instalar nada.

---

## 1. Añadir un proyecto nuevo (buzón)

1. En GitHub, entra en la carpeta **`buzon/`**.
2. Pulsa **Add file → Create new file** (o **Upload files** para subir fotos).
3. Tienes dos opciones:
   - **Ficha completa**: copia el contenido de `buzon/plantilla.md`, rellénalo y guárdalo
     con un nombre como `garaje-alcobendas.md`.
   - **Nota rápida**: escribe con tus palabras lo que recuerdes del proyecto (qué pedía
     el cliente, qué hiciste, qué se consiguió, fecha y tipo de proyecto).
4. Si tienes fotos, súbelas a la misma carpeta (sin datos personales, matrículas ni
   direcciones visibles). Si no hay fotos, la web usa la ilustración de su categoría.
5. Pulsa **Commit changes**.

La siguiente tarea programada de Claude lo convertirá en ficha publicada, moverá tus
archivos a `buzon/procesado/<fecha>/` y lo anotará en la bitácora. Lo que falte
aparecerá en la web resaltado en amarillo como **[PENDIENTE: …]**.

Categorías válidas: Baja Tensión · Media Tensión · ICT · Fotovoltaica · Licencias ·
Eficiencia Energética.

## 2. Cambiar textos

| Qué quieres cambiar | Archivo |
| --- | --- |
| Portada, servicios, «Sobre mí», llamadas a la acción, títulos para Google, datos legales (NIF, domicilio) | `src/data/sitio.ts` |
| Un proyecto ya publicado | `src/content/proyectos/<nombre>.md` |
| Aviso legal / Política de privacidad | `src/pages/aviso-legal.astro` · `src/pages/privacidad.astro` |
| Colores | `src/styles/global.css` (al principio) |

En GitHub: abre el archivo, pulsa el **lápiz** (Edit), cambia **solo el texto entre
comillas** y pulsa **Commit changes**. Si te equivocas, la comprobación automática (CI)
avisa con una ✗ roja y la web publicada no se rompe hasta que lo arregles.

**Tu foto en «Sobre mí»:** sube un archivo llamado `retrato.jpg` a la carpeta `material/`.

**LinkedIn y otras redes:** en `src/data/sitio.ts`, dentro de `redes: [ ]`, añade
`{ nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-perfil/' }`.

## 3. Ver qué se ha hecho (bitácora)

- **`mantenimiento/bitacora.md`**: cada ejecución de las tareas de Claude deja una
  entrada con fecha y hora de Madrid: qué revisó, qué cambió y qué queda pendiente.
- **`mantenimiento/incidencias.md`**: la revisión de salud de los lunes apunta aquí
  enlaces rotos o problemas de seguridad (solo cuando los hay).
- Pestaña **Actions** de GitHub: resultado de cada comprobación (✓ verde / ✗ roja).
  La revisión semanal se puede lanzar a mano en **Actions → Salud semanal → Run workflow**.

## 4. Deshacer un cambio

- **Desde GitHub (lo más fácil):** ve a **Commits** (encima de la lista de archivos),
  abre el cambio que quieres deshacer y copia su código (por ejemplo `a1b2c3d`). Luego
  pide a Claude: «deshaz el commit a1b2c3d». Claude creará un commit nuevo que lo revierte,
  sin borrar el historial.
- **Desde Cloudflare Pages (al instante):** en tu proyecto de Pages, pestaña
  **Deployments**, elige una publicación anterior que funcionara y pulsa
  **⋯ → Rollback to this deployment**. La web vuelve a esa versión mientras se arregla
  el repositorio.
- **Un archivo concreto:** abre el archivo en GitHub → **History** → abre la versión
  buena → copia el texto y pégalo con el lápiz.

## 5. Formulario de contacto y estadísticas

Se configuran en Cloudflare Pages → tu proyecto → **Settings → Variables and Secrets**
(para *Production*). Después, vuelve a publicar (Deployments → Retry deployment).

| Variable | Valor |
| --- | --- |
| `PUBLIC_FORM_ENDPOINT` | `https://api.web3forms.com/submit` |
| `PUBLIC_FORM_ACCESS_KEY` | La clave que te envía [Web3Forms](https://web3forms.com/) al registrar tu email (gratis). Es pública, no pasa nada porque aparezca en la web. |
| `PUBLIC_CF_ANALYTICS_TOKEN` | Token de Cloudflare → Analytics & Logs → Web Analytics → Add a site (estadística sin cookies). Opcional. |
| `SITE_URL` | Solo si cambias de dominio, p. ej. `https://www.tudominio.es` |

- **Sin `PUBLIC_FORM_ENDPOINT`** la página de contacto muestra botones de email y
  teléfono en lugar del formulario.
- **Formspree** también vale: pon como `PUBLIC_FORM_ENDPOINT` la URL de tu formulario
  (`https://formspree.io/f/xxxx`) y deja `PUBLIC_FORM_ACCESS_KEY` vacía.
- El formulario tiene casilla de aceptación de la privacidad y un campo trampa contra spam.

## 6. Publicación en Cloudflare Pages

| Ajuste | Valor |
| --- | --- |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Rama de producción | `main` |
| Versión de Node | la toma de `.node-version` (24.22.2). Si no, variable `NODE_VERSION=24.22.2` |

## 7. Para quien programe

```bash
npm ci          # instalar
npm run dev     # servidor local en http://localhost:4321
npm run check   # tipos + contenido + build + enlaces internos
npm run build   # compilar en dist/
```

Detalles técnicos, estructura y reglas de mantenimiento: **[CLAUDE.md](CLAUDE.md)**.
