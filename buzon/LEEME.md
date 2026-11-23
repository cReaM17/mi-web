# Buzón de proyectos

Deja aquí los proyectos nuevos. Una tarea programada de Claude Code los convertirá
en fichas publicadas en la web y moverá los originales a `buzon/procesado/AAAA-MM-DD/`.

## Qué puedes dejar

1. **Una ficha completa** (lo mejor): copia `plantilla.md`, ponle un nombre como
   `garaje-alcobendas.md` y rellénala.
2. **Una nota de texto** con lo que recuerdes del proyecto (`.md` o `.txt`). Claude la
   pasará a la plantilla usando **solo** lo que tú escribas. Lo que falte quedará
   marcado como `[PENDIENTE: ...]` en la web hasta que lo completes.
3. **Fotos** (`.jpg`, `.png`, `.webp`) junto a la ficha o la nota. Indica si son fotos
   reales de la obra o de un banco de imágenes (estas saldrán con el pie «Imagen
   ilustrativa»). Sin datos personales, matrículas ni direcciones visibles.

No subas los PDF de los proyectos: no se publican.

## Qué hace la tarea programada (reglas para Claude)

1. Lee cada archivo del buzón (excepto `LEEME.md`, `plantilla.md` y `procesado/`).
2. Crea `src/content/proyectos/<slug>.md` con el esquema de la plantilla. El slug va en
   minúsculas, sin tildes y con guiones, y describe el proyecto.
3. **No inventa nada**: ni clientes, ni cifras, ni resultados. Lo que falte se marca como
   `[PENDIENTE: ...]` y se anota en la bitácora.
4. **Imágenes**:
   - Si hay fotos, las copia a `src/content/proyectos/<slug>/` y las declara en
     `imagenes:` con un `alt` descriptivo (si la nota no lo da, lo redacta describiendo
     solo lo que se ve) y su `origen`: `obra` si es una foto real del trabajo, `banco` si
     viene de un banco de imágenes (Pexels, Unsplash…). Las de banco llevan siempre el
     pie «Imagen ilustrativa»; las de obra, nunca. Si no está claro, pregunta en la
     bitácora y usa `banco` mientras tanto.
   - Si no hay fotos, **no añade `imagenes:`**: la web usa automáticamente la
     ilustración SVG de su categoría (`src/assets/ilustraciones/`). No busca fotos por
     su cuenta ni usa imágenes generadas que parezcan fotos reales.
   - Si la categoría no existe, no la inventa: usa la más cercana y lo indica en la
     bitácora, o deja el archivo en el buzón y lo explica.
5. Ejecuta `npm run check` y `npm run build`. Si fallan, sigue las reglas de `CLAUDE.md`.
6. Mueve los originales a `buzon/procesado/AAAA-MM-DD/` (fecha de Madrid).
7. Añade una entrada en `mantenimiento/bitacora.md`.
