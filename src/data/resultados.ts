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
  // Duración aproximada en meses, solo para dibujar la línea de cada vía; null = a tu ritmo
  meses: number | null;
  // Duración en pocas palabras, visible junto a la línea de la vía
  duracion: string;
}

export interface Camino {
  id: string;
  tipo: string; // «Lo que más te pega», «El puente», «El salto»
  definicion: string; // qué significa ese tipo (sale en la ficha, bajo «Camino N · tipo»)
  nombre: string;
  foto: ImageMetadata;
  chips: string[];
  resumen: string;
  que: string;
  dia: string;
  porque: string;
  formacion: string;
  // El dato: una cifra de contexto sobre la profesión
  dato: string;
  // Opcionales: cómo se llama el trabajo y el título del bloque de formación (por defecto, «La formación»)
  trabajo?: string;
  formacionTitulo?: string;
  rutas: Ruta[];
}

export const caminos: Camino[] = [
  {
    id: 'contenido',
    tipo: 'Lo que más te pega',
    definicion: 'El que mejor encaja con cómo eres.',
    nombre: 'Creación de contenido',
    foto: noa,
    chips: ['Creatividad', 'Comunicación', 'Redes'],
    // Gancho (la línea de la tarjeta cerrada)
    resumen: 'Lo que ves en TikTok, Instagram o YouTube, pero desde el otro lado: como trabajo.',
    que: 'Piensas una idea, la grabas, la editas y la publicas. A veces para tu propio canal y, muchas más, para marcas: una tienda, un festival, un club, una empresa.',
    trabajo: 'Creador/a de contenido, editor/a de vídeo, community manager o social media.',
    dia: 'Por la mañana grabas tres vídeos cortos para una marca. Por la tarde los editas, miras qué funcionó la semana pasada y preparas lo de la siguiente. Y sí: también contestas comentarios.',
    porque: 'Dijiste que te gusta crear y contar cosas a los demás. Aquí haces exactamente eso, todos los días.',
    // PENDIENTE CLIENTA: validar dato
    // FUENTE: informe 2btube y MarketingDirecto, mayo de 2025 (más de 15.000 creadores con más de 100.000 seguidores; +16 % sobre 2024). Revisar cada año.
    dato: 'En España hay más de 15.000 creadores con más de 100.000 seguidores, y el número crece cada año. Pero la mayoría de quienes viven de esto no son famosos: trabajan creando contenido para marcas.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Grabar y editar vídeo, escribir textos cortos que enganchen y entender los números: qué funciona y por qué. Las empresas no te piden un título concreto. Te piden ver lo que ya has hecho.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones y requisitos de acceso
    rutas: [
      { titulo: 'FP de Realización de Proyectos Audiovisuales y Espectáculos', detalle: 'Grado superior · 2 años · Grabación, montaje y postproducción', tipo: 'fp', meses: 24, duracion: '2 años' },
      { titulo: 'FP de Marketing y Publicidad', detalle: 'Grado superior · 2 años · Redes y campañas para marcas', tipo: 'fp', meses: 24, duracion: '2 años' },
      { titulo: 'Grado en Comunicación Audiovisual', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48, duracion: '4 años' },
      { titulo: 'Cursos de vídeo y redes', detalle: 'Unos meses · Muchos son online', tipo: 'curso', meses: 6, duracion: 'Unos meses' },
      { titulo: 'Por tu cuenta', detalle: 'Abre un canal y aprende publicando', tipo: 'solo', meses: null, duracion: 'A tu ritmo' },
    ],
  },
  {
    id: 'animacion',
    tipo: 'El puente',
    definicion: 'Cerca de algo que ya te gusta.',
    nombre: 'Animación 3D',
    foto: laia,
    chips: ['Dibujo', 'Tecnología', 'En equipo'],
    resumen: 'Los personajes de los videojuegos y las pelis no se mueven solos. Alguien les da vida.',
    que: 'Coges un personaje o un objeto en 3D y le das movimiento: cómo anda, cómo salta, cómo pone cara de sorpresa. Para videojuegos, películas, series o anuncios.',
    trabajo: 'Animador/a 3D. Si lo que te gusta es crear los personajes y los escenarios, modelador/a 3D.',
    dia: 'Coges una escena de cinco segundos y la trabajas fotograma a fotograma hasta que el salto del personaje parezca de verdad. Luego la revisas con tu equipo, te dicen qué cambiar y vuelta a empezar. Es un trabajo de mucha paciencia y mucho detalle.',
    porque: 'Dijiste que te gusta dibujar y también la tecnología. La animación 3D junta las dos cosas.',
    // PENDIENTE CLIENTA: validar dato
    // FUENTE: Libro Blanco del Desarrollo Español de Videojuegos (DEV), mayo de 2025. Revisar cada año.
    // Resumen ejecutivo del Libro Blanco: 10.508 empleos directos en 2024; previsión de 12.750 en 2027 y 13.770 en 2028.
    dato: 'El videojuego en España da trabajo directo a más de 10.000 personas, y se espera que lleguen a unos 12.750 en 2027. Y no solo hay videojuegos: la animación se usa también en cine, publicidad, arquitectura y medicina.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Dibujar y entender cómo se mueven las cosas (el peso, el equilibrio, el ritmo), y manejar programas 3D. En este sector tu portfolio pesa tanto como el título: lo que importa es lo que eres capaz de hacer.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones y si los cursos son online
    rutas: [
      { titulo: 'FP de Animaciones 3D, Juegos y Entornos Interactivos', detalle: 'Grado superior · 2 años', tipo: 'fp', meses: 24, duracion: '2 años' },
      { titulo: 'Grado en Animación o en Diseño de Videojuegos', detalle: 'Universidad o escuela superior · 4 años', tipo: 'uni', meses: 48, duracion: '4 años' },
      { titulo: 'Cursos de modelado y animación 3D', detalle: 'Unos meses · Muchos son online', tipo: 'curso', meses: 6, duracion: 'Unos meses' },
      { titulo: 'Por tu cuenta', detalle: 'Blender es gratis y hay miles de tutoriales para empezar', tipo: 'solo', meses: null, duracion: 'A tu ritmo' },
    ],
  },
  {
    id: 'ciberseguridad',
    tipo: 'El salto',
    definicion: 'Uno que quizá no te habías planteado.',
    nombre: 'Ciberseguridad',
    foto: aitana,
    chips: ['Lógica', 'Retos', 'Tecnología'],
    resumen: 'Hackear, pero del lado de los buenos y con permiso.',
    que: 'Proteges los ordenadores, las redes y los datos de empresas y personas. Buscas los fallos antes de que los encuentre alguien con malas intenciones, o vigilas para detectar un ataque a tiempo.',
    trabajo: 'Hacker ético (pentester), analista de seguridad o auditor/a de ciberseguridad.',
    dia: 'Unos días intentas entrar en el sistema de una empresa, con su permiso, para encontrar sus puntos débiles. Otros vigilas alertas y decides cuáles son urgentes. Después lo cuentas en un informe para que lo arreglen.',
    porque: 'Dijiste que te gusta resolver retos y la tecnología. Aquí cada fallo por encontrar es un reto nuevo.',
    // PENDIENTE CLIENTA: validar dato
    // FUENTE: INCIBE, previsión publicada en diciembre de 2023. OJO: el estudio original es de marzo de 2022 («Análisis y Diagnóstico del Talento en Ciberseguridad en España») y proyecta la demanda para 2024; la nota de diciembre de 2023 repite la cifra.
    dato: 'Es una de las profesiones donde más gente falta: el INCIBE calculó que en España harían falta más de 83.000 profesionales, el doble de los que hay formados.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Cómo funcionan los ordenadores y las redes, y después cómo se protegen y cómo se atacan (siempre de forma legal). Se aprende practicando: hay webs gratuitas con retos para empezar desde cero.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones, requisitos de acceso y la duración del curso de especialización
    rutas: [
      { titulo: 'FP de Informática + curso de especialización en Ciberseguridad', detalle: 'Grado superior como ASIR (2 años) y después un curso de unos 9 meses', tipo: 'fp', meses: 33, duracion: '2 años + curso' },
      { titulo: 'Grado en Ingeniería de la Ciberseguridad', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48, duracion: '4 años' },
      { titulo: 'Cursos y certificaciones', detalle: 'Unos meses · Muchos son online', tipo: 'curso', meses: 6, duracion: 'Unos meses' },
      { titulo: 'Por tu cuenta', detalle: 'Retos gratis de hacking ético, como picoCTF o TryHackMe', tipo: 'solo', meses: null, duracion: 'A tu ritmo' },
    ],
  },
];

// Tu perfil: tres rasgos que se muestran bajo «Así eres, según tus respuestas».
// PENDIENTE CLIENTA: son de ejemplo; los reales dependen de la lógica del test.
export interface Rasgo {
  icono: 'crear' | 'contar' | 'retos';
  titulo: string;
  texto: string;
}

export const perfil: { eti: string; rasgos: Rasgo[] } = {
  eti: 'Así eres, según tus respuestas',
  rasgos: [
    { icono: 'crear', titulo: 'Te mueve crear', texto: 'Disfrutas haciendo cosas que antes no existían.' },
    { icono: 'contar', titulo: 'Te gusta contar cosas', texto: 'Explicar, mostrar y compartir te sale natural.' },
    { icono: 'retos', titulo: 'Te motivan los retos', texto: 'Cuando algo es difícil, te pica la curiosidad.' },
  ],
};

// Acompañamiento premium (los textos parten de los del bloque «Cómo funciona»)
export const acompanamiento = {
  foto: coach,
  eti: 'Acompañamiento premium',
  // Opción C · banda discreta (la que se ve)
  frase: 'Si dudas entre tus 3 caminos, lo vemos juntos y sales con un plan.',
  firma: 'Coach de orientación · Sesiones 1 a 1 por videollamada',
  // Opción B · «Tus 3 caminos llevan al coach» (montada, oculta mientras coachVariante sea 'C')
  titulo: { antes: '¿Aún dudas entre tus ', enfasis: '3 caminos', despues: '?' },
  intro: 'Un coach los repasa contigo, uno a uno, hasta que sepas cuál probar primero.',
  tuCoach: 'Tu coach',
  plan: { titulo: 'Tu plan', texto: 'Qué estudiar y por dónde empezar' },
  chips: ['Online', 'Por videollamada', '1 a 1'],
  // Común a las dos
  cta: 'Quiero hablar con un coach',
  // PENDIENTE CLIENTA: precio, número y duración de las sesiones, condiciones, enlace de contratación y nombre del coach
  nota: 'Opcional · Tus 3 caminos y sus fichas son gratis.',
};
