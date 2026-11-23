# Incidencias de salud

Este archivo lo rellena automáticamente el flujo **Salud semanal**
(`.github/workflows/salud-semanal.yml`) cuando encuentra problemas: compilación
fallida, enlaces externos rotos o vulnerabilidades en dependencias.
Si una semana no hay problemas, no se añade nada.

Las tareas programadas de Claude Code leen este archivo y, cuando resuelven una
incidencia, lo indican en `mantenimiento/bitacora.md`.

## 2026-11-23 16:49 (hora de Madrid) · revisión semanal

Ejecución: https://github.com/cReaM17/mi-web/actions/runs/45209446502

- ✓ Compilación correcta

### ✗ Enlaces externos rotos
# Summary

| Status         | Count |
|----------------|-------|
| 🔍 Total       | 446   |
| 🔗 Unique      | 43    |
| ✅ Successful  | 5     |
| ⏳ Timeouts    | 0     |
| 🔀 Redirected  | 2     |
| 👻 Excluded    | 77    |
| ❓ Unknown     | 0     |
| 🚫 Errors      | 364   |
| ⛔ Unsupported | 0     |

## Errors per input

### Errors in dist/404.html

* [ERROR] <error:> (at 1:11010) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11102) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11194) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11284) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11374) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11470) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1579) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1640) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5017) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5073) | Cannot resolve root-relative link '/_astro/404.ByCLuEFv.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5340) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6566) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6658) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6750) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6840) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8492) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8571) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8739) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8885) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/aviso-legal/index.html

* [ERROR] <error:> (at 1:11120) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13199) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13291) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13383) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13473) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13563) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13659) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1493) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1554) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:4931) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5199) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6425) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6517) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6609) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6699) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/contacto/gracias/index.html

* [ERROR] <error:> (at 1:10150) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10242) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10334) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10424) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10514) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10610) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1529) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1590) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:4967) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5235) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6461) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6553) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6645) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6735) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8240) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8311) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/contacto/index.html

* [ERROR] <error:> (at 1:11664) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11756) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11848) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11938) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12028) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12124) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1601) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1662) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5039) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5095) | Cannot resolve root-relative link '/_astro/index.C0LtvnTY.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5364) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6590) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6682) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6774) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6864) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/index.html

* [ERROR] <error:> (at 1:10164) | Cannot resolve root-relative link '/servicios/#baja-tension': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10654) | Cannot resolve root-relative link '/_astro/media-tension.Oic8nhHe_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10893) | Cannot resolve root-relative link '/servicios/#media-tension': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11358) | Cannot resolve root-relative link '/_astro/fotovoltaica.BNxmtjw4_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11596) | Cannot resolve root-relative link '/servicios/#fotovoltaica': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12025) | Cannot resolve root-relative link '/_astro/ict.qPSAotk3_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12254) | Cannot resolve root-relative link '/servicios/#ict': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12731) | Cannot resolve root-relative link '/_astro/licencias.Ubroi44D_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12966) | Cannot resolve root-relative link '/servicios/#licencias': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13366) | Cannot resolve root-relative link '/_astro/eficiencia-energetica.04EFWiqA_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13613) | Cannot resolve root-relative link '/servicios/#eficiencia-energetica': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13969) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14499) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14923) | Cannot resolve root-relative link '/proyectos/desclasificacion-garaje-83-plazas-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15330) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15758) | Cannot resolve root-relative link '/proyectos/instalacion-electrica-41-apartamentos-turisticos-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16170) | Cannot resolve root-relative link '/_astro/ict.qPSAotk3_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1627) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16581) | Cannot resolve root-relative link '/proyectos/ict-edificio-14-viviendas-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1688) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16911) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17414) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:19280) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:19372) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:19464) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:19554) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:19644) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:19740) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5065) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5121) | Cannot resolve root-relative link '/_astro/Llamada.DFvsTE7w.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5180) | Cannot resolve root-relative link '/_astro/ServiceCard.DCgh-niC.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5243) | Cannot resolve root-relative link '/_astro/index.CILC_U2a.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5512) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6738) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6830) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6922) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:7012) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8794) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8891) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9926) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir

### Errors in dist/privacidad/index.html

* [ERROR] <error:> (at 1:12902) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12994) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13086) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13176) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13266) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13362) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1517) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1578) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:4955) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5223) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6449) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6541) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6633) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6723) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/ampliacion-red-baja-tension-edificio-madrid/index.html

* [ERROR] <error:> (at 1:11324) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12858) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13309) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13733) | Cannot resolve root-relative link '/proyectos/soterramiento-linea-baja-tension-navalcarnero/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14133) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14561) | Cannot resolve root-relative link '/proyectos/instalacion-electrica-41-apartamentos-turisticos-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14983) | Cannot resolve root-relative link '/_astro/media-tension.Oic8nhHe_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15405) | Cannot resolve root-relative link '/proyectos/nuevo-suministro-media-tension-desarrollo-urbanistico/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17510) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17602) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17694) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17784) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17874) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17970) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1805) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1866) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6637) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6693) | Cannot resolve root-relative link '/_astro/_slug_.CZMxJa9_.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6963) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8189) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8281) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8393) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8483) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9885) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9964) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/desclasificacion-garaje-83-plazas-madrid/index.html

* [ERROR] <error:> (at 1:10075) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11401) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13015) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13466) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13894) | Cannot resolve root-relative link '/proyectos/instalacion-electrica-41-apartamentos-turisticos-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14315) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14744) | Cannot resolve root-relative link '/proyectos/ampliacion-red-baja-tension-edificio-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15154) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15578) | Cannot resolve root-relative link '/proyectos/soterramiento-linea-baja-tension-navalcarnero/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17684) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17776) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17868) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17958) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1799) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:18048) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:18144) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1860) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6748) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6804) | Cannot resolve root-relative link '/_astro/_slug_.CZMxJa9_.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:7074) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8300) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8392) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8504) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8594) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9996) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/ict-edificio-14-viviendas-madrid/index.html

* [ERROR] <error:> (at 1:11154) | Cannot resolve root-relative link '/_astro/ict.qPSAotk3_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12765) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14639) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14731) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14823) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14913) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15003) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15099) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1769) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1830) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6514) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6570) | Cannot resolve root-relative link '/_astro/_slug_.CZMxJa9_.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6840) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8066) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8158) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8270) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8360) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9762) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9841) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/index.html

* [ERROR] <error:> (at 1:10144) | Cannot resolve root-relative link '/proyectos/ampliacion-red-baja-tension-edificio-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10586) | Cannot resolve root-relative link '/_astro/media-tension.Oic8nhHe_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11009) | Cannot resolve root-relative link '/proyectos/nuevo-suministro-media-tension-desarrollo-urbanistico/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11438) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11862) | Cannot resolve root-relative link '/proyectos/soterramiento-linea-baja-tension-navalcarnero/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12292) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12716) | Cannot resolve root-relative link '/proyectos/desclasificacion-garaje-83-plazas-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13153) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13581) | Cannot resolve root-relative link '/proyectos/instalacion-electrica-41-apartamentos-turisticos-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14014) | Cannot resolve root-relative link '/_astro/ict.qPSAotk3_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14425) | Cannot resolve root-relative link '/proyectos/ict-edificio-14-viviendas-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15154) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1607) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1668) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17020) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17112) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17204) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17294) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17384) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17480) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5045) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5101) | Cannot resolve root-relative link '/_astro/Llamada.DFvsTE7w.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5160) | Cannot resolve root-relative link '/_astro/index.Cdi7WzFC.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5429) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6655) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6747) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6859) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6949) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9714) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/instalacion-electrica-41-apartamentos-turisticos-madrid/index.html

* [ERROR] <error:> (at 1:10014) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:11359) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12934) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13385) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13814) | Cannot resolve root-relative link '/proyectos/ampliacion-red-baja-tension-edificio-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14224) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14648) | Cannot resolve root-relative link '/proyectos/soterramiento-linea-baja-tension-navalcarnero/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15048) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15472) | Cannot resolve root-relative link '/proyectos/desclasificacion-garaje-83-plazas-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17585) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17677) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17769) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17859) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17949) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:18045) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1807) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1868) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6687) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6743) | Cannot resolve root-relative link '/_astro/_slug_.CZMxJa9_.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:7013) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8239) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8331) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8443) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8533) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9935) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/nuevo-suministro-media-tension-desarrollo-urbanistico/index.html

* [ERROR] <error:> (at 1:11375) | Cannot resolve root-relative link '/_astro/media-tension.Oic8nhHe_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12887) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13338) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13767) | Cannot resolve root-relative link '/proyectos/ampliacion-red-baja-tension-edificio-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14177) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14601) | Cannot resolve root-relative link '/proyectos/soterramiento-linea-baja-tension-navalcarnero/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16707) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16799) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16891) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16981) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17071) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17167) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1727) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1788) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6667) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6723) | Cannot resolve root-relative link '/_astro/_slug_.CZMxJa9_.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6993) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8219) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8311) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8423) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8513) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9915) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9994) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/proyectos/soterramiento-linea-baja-tension-navalcarnero/index.html

* [ERROR] <error:> (at 1:11196) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:12692) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13143) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13572) | Cannot resolve root-relative link '/proyectos/ampliacion-red-baja-tension-edificio-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13982) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14410) | Cannot resolve root-relative link '/proyectos/instalacion-electrica-41-apartamentos-turisticos-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14831) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15255) | Cannot resolve root-relative link '/proyectos/desclasificacion-garaje-83-plazas-madrid/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17368) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17460) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1753) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17552) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17642) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17732) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17828) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1814) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6521) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6577) | Cannot resolve root-relative link '/_astro/_slug_.CZMxJa9_.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6847) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8073) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8165) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8277) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8367) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9769) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9848) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/servicios/index.html

* [ERROR] <error:> (at 1:10358) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10470) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10562) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:10652) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13213) | Cannot resolve root-relative link '/_astro/baja-tension.BY9Mdi6a_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14053) | Cannot resolve root-relative link '/proyectos/?categoria=baja-tension': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14247) | Cannot resolve root-relative link '/_astro/media-tension.Oic8nhHe_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15055) | Cannot resolve root-relative link '/proyectos/?categoria=media-tension': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:15246) | Cannot resolve root-relative link '/_astro/fotovoltaica.BNxmtjw4_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16034) | Cannot resolve root-relative link '/_astro/ict.qPSAotk3_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1609) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1670) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:16866) | Cannot resolve root-relative link '/proyectos/?categoria=ict': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17034) | Cannot resolve root-relative link '/_astro/licencias.Ubroi44D_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:17797) | Cannot resolve root-relative link '/_astro/eficiencia-energetica.04EFWiqA_23dUAl.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:18933) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:20799) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:20891) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:20983) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:21073) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:21163) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:21259) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8681) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8737) | Cannot resolve root-relative link '/_astro/Llamada.DFvsTE7w.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8796) | Cannot resolve root-relative link '/_astro/ServiceCard.DCgh-niC.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:8859) | Cannot resolve root-relative link '/_astro/servicios.CEH0DjQQ.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:9132) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir

### Errors in dist/sobre-mi/index.html

* [ERROR] <error:> (at 1:11710) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13576) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13668) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13760) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13850) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:13940) | Cannot resolve root-relative link '/aviso-legal/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:14036) | Cannot resolve root-relative link '/privacidad/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1595) | Cannot resolve root-relative link '/favicon.svg': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:1656) | Cannot resolve root-relative link '/sitemap-index.xml': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:210) | Cannot resolve root-relative link '/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:324) | Cannot resolve root-relative link '/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5033) | Cannot resolve root-relative link '/_astro/Base.DOSEntmp.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5089) | Cannot resolve root-relative link '/_astro/Llamada.DFvsTE7w.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5148) | Cannot resolve root-relative link '/_astro/sobre-mi.BXoLMkHj.css': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:5420) | Cannot resolve root-relative link '/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6646) | Cannot resolve root-relative link '/servicios/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6738) | Cannot resolve root-relative link '/proyectos/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6830) | Cannot resolve root-relative link '/sobre-mi/': To resolve root-relative links in local files, provide a root dir
* [ERROR] <error:> (at 1:6940) | Cannot resolve root-relative link '/contacto/': To resolve root-relative links in local files, provide a root dir

[Full Github Actions output](https://github.com/cReaM17/mi-web/actions/runs/45209446502?check_suite_focus=true)
- ✓ Sin vulnerabilidades conocidas en dependencias de producción
