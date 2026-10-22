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
  // Opcionales: cómo se llama el trabajo y el título del bloque de formación (por defecto, «La formación»)
  trabajo?: string;
  formacionTitulo?: string;
  rutas: Ruta[];
}

export const caminos: Camino[] = [
  {
    id: 'contenido',
    tipo: 'Lo que más te pega',
    nombre: 'Creación de contenido',
    foto: noa,
    chips: ['Creatividad', 'Comunicación', 'Redes'],
    resumen: 'Haces vídeos para redes, como los que ves en TikTok, Instagram o YouTube, pero como trabajo.',
    que: 'Piensas una idea, la grabas, la editas y la publicas. Lo haces para una marca (una tienda, una empresa…) o para tu propio canal.',
    trabajo: 'Creador de contenido, editor de vídeo o community manager.',
    dia: 'Cada día es distinto. Unos días grabas y editas vídeos. Otros planificas qué vas a publicar la semana que viene y contestas a los comentarios de la gente.',
    porque: 'Dijiste que te gusta crear y contar cosas a los demás. Este trabajo es justo eso.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Grabar y editar vídeo, escribir textos cortos y entender qué funciona en redes. Muchas empresas piden ver lo que ya has hecho, así que tu mejor carta de presentación son tus propios vídeos.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones y requisitos de acceso (borrador con datos de fichas oficiales)
    rutas: [
      { titulo: 'FP de Realización de Proyectos Audiovisuales', detalle: 'FP de grado superior · 2 años · Vídeo, montaje y postproducción', tipo: 'fp' },
      { titulo: 'FP de Marketing y Publicidad', detalle: 'FP de grado superior · 2 años · Marketing y redes para marcas', tipo: 'fp' },
      { titulo: 'Grado en Comunicación Audiovisual', detalle: 'Universidad · 4 años', tipo: 'uni' },
      { titulo: 'Cursos de vídeo y redes', detalle: 'Unos meses · Muchos son online', tipo: 'curso' },
      { titulo: 'Por tu cuenta', detalle: 'Abre tu canal y aprende publicando', tipo: 'solo' },
    ],
  },
  {
    id: 'animacion',
    tipo: 'El puente',
    nombre: 'Animación 3D',
    foto: laia,
    chips: ['Dibujo', 'Tecnología', 'En equipo'],
    resumen: 'Das movimiento a personajes y objetos en 3D, como los de los videojuegos, las películas o los anuncios.',
    que: 'Coges un personaje o un objeto creado en 3D y le das movimiento: cómo anda, cómo salta, cómo gesticula. Lo haces para videojuegos, películas, series o anuncios.',
    trabajo: 'Animador 3D o modelador 3D (el que crea los personajes y los escenarios).',
    dia: 'Cada día es distinto. Unos días pones al personaje en las poses importantes y ajustas el movimiento para que parezca natural. Otros lo preparas para poder moverlo, con un esqueleto digital por dentro. En equipos pequeños, a veces haces las dos cosas.',
    porque: 'Dijiste que te gusta dibujar y la tecnología. Este trabajo junta las dos cosas.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Dibujar y entender cómo se mueven las cosas (el peso, el equilibrio), modelar y animar en 3D con programas de ordenador, y practicar mucho con proyectos. Hay programas gratis para empezar, como Blender.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones, si los cursos son online y qué centros recomienda
    rutas: [
      { titulo: 'FP de Animaciones 3D, Juegos y Entornos Interactivos', detalle: 'FP de grado superior · 2 años · Modelado y animación 3D', tipo: 'fp' },
      { titulo: 'Grado en Animación', detalle: 'Grado · 4 años · En universidad o escuela superior', tipo: 'uni' },
      { titulo: 'Cursos de modelado y animación 3D', detalle: 'Unos meses · Muchos son online', tipo: 'curso' },
      { titulo: 'Por tu cuenta', detalle: 'Blender es gratis: puedes bajarlo y empezar hoy', tipo: 'solo' },
    ],
  },
  {
    id: 'ciberseguridad',
    tipo: 'El salto',
    nombre: 'Ciberseguridad',
    foto: aitana,
    chips: ['Lógica', 'Retos', 'Tecnología'],
    resumen: 'Proteges a empresas y personas de los ataques informáticos, buscando los fallos antes que los hackers malos.',
    que: 'Proteges los ordenadores, las redes y los datos de empresas y personas contra ataques informáticos. Buscas los fallos de seguridad antes de que los encuentre alguien malintencionado, o vigilas para detectar un ataque a tiempo.',
    trabajo: 'Hacker ético (o pentester), analista de seguridad o auditor de ciberseguridad.',
    dia: 'Cada día es distinto. Unos días intentas entrar en un sistema, con permiso de la empresa, para encontrar sus fallos antes que un atacante de verdad. Otros vigilas las alertas de seguridad y decides cuáles son urgentes. Después cuentas lo que has encontrado en un informe.',
    porque: 'Dijiste que te gusta resolver retos y la tecnología. En este trabajo, cada fallo por encontrar es un reto.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Cómo funcionan los ordenadores y las redes, y después cómo se protegen y cómo se atacan (siempre de forma legal). Se aprende practicando con retos y entornos de prueba, y hay webs gratis para empezar.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones, requisitos de acceso y si recomienda cursos concretos
    rutas: [
      { titulo: 'FP de Informática y curso de ciberseguridad', detalle: 'FP de grado superior (como ASIR) · 2 años, y después un curso de especialización', tipo: 'fp' },
      { titulo: 'Grado en Ciberseguridad', detalle: 'Universidad · 4 años', tipo: 'uni' },
      { titulo: 'Cursos de ciberseguridad', detalle: 'Unos meses · Muchos son online', tipo: 'curso' },
      { titulo: 'Por tu cuenta', detalle: 'Practica con retos de hacking ético gratis, como picoCTF o TryHackMe', tipo: 'solo' },
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
