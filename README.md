# NextYou · versión Lima

Landing de NextYou (Astro, sitio estático) con la paleta Lima como portada.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde está cada cosa

- `src/pages/index.astro`: portada. `src/pages/empezar/`: pantalla previa al test (nombre y correo). `src/pages/legal/`: textos legales.
- `src/data/`: textos y datos de las secciones. Los de la última revisión con la clienta están en `src/data/lima.ts`.
- `src/layouts/V5.astro`: plantilla común (cabecera, pie, paletas, estilos y scripts comunes).
- `src/config.ts`: ajustes globales (enlaces, base de la web).
- `PENDIENTES.md`: lo que falta por cerrar con la clienta (destino de los datos, textos legales, URL del test, fotos reales).

Las personas, citas y fotos de la web son **de muestra** hasta tener las reales con cesión de imagen.

## Publicación

La vista previa se publica en GitHub Pages desde la rama `gh-pages` con la ruta base `/nextyou-lima`:

```bash
SITE_URL=https://sheisdigitalab.github.io BASE_PATH=/nextyou-lima npm run build
```
