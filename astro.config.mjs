// @ts-check
import { defineConfig } from 'astro/config';
import { SITIO } from './src/config.ts';

// SITE_URL y BASE_PATH los pone el despliegue (vista previa en GitHub Pages).
// En local o con el dominio definitivo no hacen falta.
export default defineConfig({
  site: process.env.SITE_URL || SITIO.url,
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
  // Sin integraciones ni scripts de terceros: web estática.
});
