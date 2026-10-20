# Pendientes antes de publicar

En el código, cada punto está marcado con `data-placeholder="true"` y un comentario `PLACEHOLDER` o `PENDIENTE`. Para encontrarlos todos: buscar `PLACEHOLDER`, `PENDIENTE` y `data-placeholder`.

## Personas, citas y fotos de muestra (no publicar como reales)

Todas salen de `src/data/home.ts`. Las fotos de `src/assets/muestra/` son de muestra y no corresponden a personas reales: sirven para enseñar la maqueta, no para la web definitiva. Cada persona real tiene que firmar la cesión de derechos de imagen.

| Bloque | Qué hay ahora | Qué falta |
|---|---|---|
| Hero | Aisha, 21 · «A los 17 nadie me habló de esto…» · foto | Persona real, su cita, foto y vídeo |
| No eres el único | Nil 19, Lucía 18, Jan 17, Sofía 18, con cita y foto | Cuatro personas reales |
| Qué es NextYou | Tarjeta «tu martes posible» con tareas de ejemplo | Tareas reales sacadas de conversaciones con los profesionales |
| Los de dentro | Marta 34, Dani 27, Iván 41, Mía 29, con foto | Profesionales reales, sus fotos y sus vídeos |
| Sara | Marcador gris en lugar de la foto | Foto de Sara |
| Sara | Titular y párrafo escritos para la propuesta | Que Sara los valide o los reescriba |

## Contenido sin decidir (la clienta)

- **Destino del botón principal**: `CTA_PRINCIPAL` en `src/config.ts`, ahora `#`. Cambia los cinco botones de «Empezar» a la vez.
- **Línea de precio bajo el botón**: hueco comentado en el hero y en «Cómo funciona».
- **Precio del acompañamiento con coach**: el bloque «Quién hay detrás» y la página `/acompanamiento` ya están, pero sin precio.
- **Página de familias**: hecha (`/familias`). Faltan el destino de sus botones («Enviarle la experiencia», «Hacerlo juntos»), el precio del coach y el enlace a la política de privacidad y datos de menores.
- **Vídeo del hero**: `hero.video` en `src/data/home.ts`. Al rellenarlo aparecen la pastilla «Ver a …» y el botón de sonido.
- **Vídeos de los profesionales**: las tarjetas muestran la duración pero aún no abren nada.

## Páginas que aún no existen

Todas en `ENLACES` (`src/config.ts`), ahora con `#`: Historias, Profesiones, Sobre Sara (también el botón «Leer su historia»), Privacidad y Datos y menores.

## Técnico

- **Dominio**: ahora se publica como vista previa en `https://sheisdigitalab.github.io/nextyou-lima/` (variables `SITE_URL` y `BASE_PATH` del flujo de despliegue). Con el dominio definitivo, cambiar `SITIO.url` en `src/config.ts` y quitar `BASE_PATH`.
- **Textos legales**: los aporta la clienta o su abogado.
- Antes de pasar al dominio definitivo: poner `NO_INDEXAR` a `false` en `src/config.ts` para que Google pueda indexar la web.

## Vídeos de «Los de dentro» (clips de noviembre)

La web ya está preparada: al pulsar una tarjeta se abre el visor y, si hay vídeo, se reproduce.

1. Copiar cada clip (`.mp4`, vertical 9:16, idealmente menos de 15 MB) en `public/videos/`.
2. Si hay subtítulos, copiar el `.vtt` al lado.
3. En `src/data/home.ts`, en la persona que toque (`losDeDentro.personas`), poner las rutas:
   `video: '/nextyou-lima/videos/marta.mp4'` y `subtitulos: '/nextyou-lima/videos/marta.vtt'`
   (con el dominio definitivo, sin `/nextyou-lima`).
4. Para el vídeo de la portada («Ver a …»), lo mismo en `hero.video`.

Mientras `video` sea `null`, se ve la foto con el aviso «Aquí irá el vídeo».

## Universidad (v3)

- `src/pages/v3/universidad.astro` con textos de `src/data/universidad.ts`, sacados del recorrido «Giro de Rumbo» de la documentación. Validar con Sara: en el plan es un incremento posterior al MVP.
