# Incidencias de salud

Este archivo lo rellena automáticamente el flujo **Salud semanal**
(`.github/workflows/salud-semanal.yml`) cuando encuentra problemas: compilación
fallida, enlaces externos rotos o vulnerabilidades en dependencias.
Si una semana no hay problemas, no se añade nada.

Las tareas programadas de Claude Code leen este archivo y, cuando resuelven una
incidencia, lo indican en `mantenimiento/bitacora.md`.
