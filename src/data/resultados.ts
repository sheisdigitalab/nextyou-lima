// Página de resultados del test (/resultados/): los 3 caminos y el acompañamiento premium.
// PENDIENTE CLIENTA: todo el contenido es de EJEMPLO (profesiones, formaciones, duraciones, textos y
// condiciones del coach). En el producto real, los 3 caminos salen de las respuestas del test.
import noa from '../assets/muestra/noa.jpg';
import laia from '../assets/muestra/laia.jpg';
import aitana from '../assets/muestra/aitana.jpg';
import coach from '../assets/muestra/coach-4.jpg';

export interface Ruta {
  titulo: string;
  detalle: string;
  tipo: 'fp' | 'uni' | 'curso' | 'solo';
  // Duración aproximada en meses (para compararlas en el mapa); null = a tu ritmo
  meses: number | null;
}

export interface Camino {
  id: string;
  tipo: string; // «Lo que más te pega», «El puente», «El salto»
  nombre: string;
  foto: ImageMetadata;
  chips: string[];
  resumen: string;
  que: string;
  dia: string;
  porque: string;
  formacion: string;
  rutas: Ruta[];
}

export const caminos: Camino[] = [
  {
    id: 'contenido',
    tipo: 'Lo que más te pega',
    nombre: 'Creación de contenido',
    foto: noa,
    chips: ['Creatividad', 'Comunicación', 'Redes'],
    resumen: 'Creas vídeos y publicaciones para marcas o para tu propio canal.',
    que: 'Creas vídeos y publicaciones para marcas o para tu propio canal.',
    dia: 'Grabas, editas y miras qué ha funcionado para mejorar.',
    porque: 'Te encanta crear y contar historias.',
    formacion:
      'Se aprende combinando narrativa, edición de vídeo, redes sociales y análisis de resultados. No hay un único título obligatorio: lo que cuenta es lo que sabes hacer y lo que has publicado.',
    rutas: [
      { titulo: 'FP de Marketing y Publicidad', detalle: 'FP de grado superior · 2 años', tipo: 'fp', meses: 24 },
      { titulo: 'Grado en Comunicación Audiovisual', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48 },
      { titulo: 'Cursos de edición y redes', detalle: 'Unos meses', tipo: 'curso', meses: 6 },
      { titulo: 'Por tu cuenta', detalle: 'Abre tu canal y aprende publicando', tipo: 'solo', meses: null },
    ],
  },
  {
    id: 'animacion',
    tipo: 'El puente',
    nombre: 'Animación 3D',
    foto: laia,
    chips: ['Dibujo', 'Tecnología', 'En equipo'],
    resumen: 'Das vida a personajes para videojuegos, series y anuncios.',
    que: 'Das vida a personajes para videojuegos, series y anuncios.',
    dia: 'Animas escenas y las revisas con tu equipo.',
    porque: 'Está cerca del dibujo, que ya te gusta.',
    formacion:
      'Se aprende modelado, animación y herramientas de producción 3D, normalmente con proyectos prácticos. Un buen portfolio pesa tanto como el título.',
    rutas: [
      { titulo: 'FP de Animación 3D, Juegos y Entornos Interactivos', detalle: 'FP de grado superior · 2 años', tipo: 'fp', meses: 24 },
      { titulo: 'Grado en Animación', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48 },
      { titulo: 'Cursos online y bootcamps', detalle: 'Unos meses', tipo: 'curso', meses: 6 },
      { titulo: 'Por tu cuenta', detalle: 'Blender es gratis y un buen portfolio abre puertas', tipo: 'solo', meses: null },
    ],
  },
  {
    id: 'ciberseguridad',
    tipo: 'El salto',
    nombre: 'Ciberseguridad',
    foto: aitana,
    chips: ['Lógica', 'Retos', 'Tecnología'],
    resumen: 'Proteges a empresas y personas de ataques informáticos.',
    que: 'Proteges a empresas y personas de ataques informáticos.',
    dia: 'Buscas fallos de seguridad antes de que los encuentre otro.',
    porque: 'Disfrutas resolviendo retos difíciles.',
    formacion:
      'Se parte de bases de informática y redes y luego se especializa en seguridad. Se practica mucho con retos y entornos de prueba, y las certificaciones ayudan a entrar.',
    rutas: [
      { titulo: 'FP de Informática + especialización en Ciberseguridad', detalle: 'FP de grado superior · 3 años', tipo: 'fp', meses: 36 },
      { titulo: 'Grado en Ingeniería Informática', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48 },
      { titulo: 'Certificaciones y bootcamps', detalle: 'Unos meses', tipo: 'curso', meses: 6 },
      { titulo: 'Por tu cuenta', detalle: 'Practica con retos de hacking ético', tipo: 'solo', meses: null },
    ],
  },
];

// Acompañamiento premium (los textos parten de los del bloque «Cómo funciona»)
export const acompanamiento = {
  foto: coach,
  eti: 'Acompañamiento premium',
  titulo: 'Un coach te guía hasta que lo tengas claro',
  texto:
    'Sesiones individuales online con un coach que te acompaña de forma personalizada: revisa contigo tus 3 caminos, resuelve tus dudas y te ayuda a decidir qué estudiar y por dónde empezar.',
  puntos: [
    'Sesiones 1 a 1 por videollamada',
    'Revisáis juntos tus 3 caminos y tus dudas',
    'Sales con un plan claro de por dónde empezar',
  ],
  cta: 'Contratar un coach',
  // PENDIENTE CLIENTA: precio, número y duración de las sesiones, condiciones y enlace de contratación
  nota: 'Es opcional: tus 3 caminos y sus fichas son gratis.',
};
