// Contenido propio de la versión 4. Parte de home.ts, familias.ts y universidad.ts
// (que siguen usando la v1, la v2 y la v3) y sobrescribe solo lo que cambia en la v4.
//
// IMPORTANTE: todas las personas, citas y fotos son DE MUESTRA (placeholder: true).

import { noEresElUnico, queEsNextYou } from './home';
import { familiasPagina } from './familias';
import { acompanamiento } from './acompanamiento';
import irene from '../assets/muestra/que-es.jpg';

export const BASE_V4 = 'v4/';

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
export const unicoV4 = {
  ...noEresElUnico,
  // Voicebook: «No estás perdido: estás buscando pistas». Sin la palabra «perdido».
  titulo: 'Chicos de tu edad que están justo donde tú estás',
  resaltado: 'justo donde tú estás',
  // Lucía (comentario #5 de Sara: la foto no encajaba) pasa a ser un testimonio universitario
  personas: noEresElUnico.personas.map((p, i) =>
    i === 1
      ? {
          placeholder: true,
          nombre: 'Irene',
          edad: 20,
          cita: 'Voy por segundo de carrera y no me veo en esto.',
          foto: irene,
          alt: 'Irene, con jersey mostaza, en la terraza de un café con su portátil.',
          universidad: true,
        }
      : { ...p, universidad: false }
  ),
};

export const queV4 = {
  ...queEsNextYou,
  // «De futuro» sonaba a promesa
  titulo: 'El método para descubrir tus talentos probando profesiones que quizá no conoces con quienes ya trabajan en ellas.',
  pasos: queEsNextYou.pasos.map((p, i) =>
    i === 1 ? { ...p, texto: 'Lo que más te pega, el puente y el salto. Ninguno es «el bueno».' } : p
  ),
};

// v5: el paso 1 con los conceptos del test real (nextyou.academy/test/bachillerato-que-estudiar):
// misión «Brújula Interior», 12 preguntas, 8 minutos, sin respuestas correctas ni incorrectas.
export const queV5 = {
  ...queV4,
  // Cada paso cuenta qué haces y qué te llevas, para que se entienda el recorrido entero.
  // PLACEHOLDER: textos de propuesta, a validar con Sara (sin precios ni condiciones del coach).
  pasos: [
    {
      titulo: 'Empiezas por ti: 12 preguntas',
      texto: 'Cómo es tu energía, qué te mueve y cómo arrancas cuando algo te interesa. Eliges lo que más se parece a ti y en 8 minutos tienes tu perfil, explicado claro.',
      nota: 'Pruébalo: responde 3 y mira qué sale',
      llevas: '',
    },
    {
      titulo: 'Te damos tres recorridos',
      texto: 'Al acabar ves tres recorridos que encajan contigo: el que más te pega, un puente hacia algo parecido y un salto hacia algo que quizá no conocías. Ninguno es «el bueno»: son ideas para explorar.',
      llevas: 'tres profesiones concretas y por qué encajan contigo.',
      // Esquema de los tres caminos (PLACEHOLDER: profesiones de ejemplo)
      ramas: [
        { tipo: 'Lo que más te pega', ejemplo: 'Creación de contenido', nota: 'encaja con cómo eres hoy' },
        { tipo: 'El puente', ejemplo: 'Animación 3D', nota: 'algo parecido, con un giro' },
        { tipo: 'El salto', ejemplo: 'Ciber­seguridad', nota: 'quizá ni sabías que existía' }, // guion opcional: corta «Ciber-seguridad» si no cabe
      ],
    },
    {
      titulo: 'Recibes consejos personalizados',
      texto: 'Según tus resultados, te damos consejos para empezar a explorar cada recorrido y acceso a entrevistas con personas que ya se dedican a ello: qué estudiaron, cómo empezaron y cómo es su día a día.',
      llevas: 'pasos concretos para probar y la experiencia de quien ya está ahí.',
      // Ejemplo con el recorrido «puente» (PLACEHOLDER). Las entrevistas son de gente de «Los de dentro»
      // Cromos: una persona por recorrido, distinta de «Los de dentro» (sin caras ni profesiones repetidas en la home).
      // PLACEHOLDER: personas, textos y fotos de muestra. Mientras no hay foto, el cromo muestra la inicial y un icono.
      cromos: [
        { nombre: 'Noa', edad: 24, prof: 'Crea contenido', profesion: 'Creación de contenido', estudio: 'Periodismo', empezo: 'Subiendo recetas a TikTok', consejo: 'Graba un vídeo de un minuto sobre algo que sepas hacer.', cita: 'Empecé grabando recetas con el móvil.', duracion: '2 min', icono: 'contenido', camino: ['Estudió Periodismo', 'Vídeos de cocina', 'Crea contenido'], estudios: 'Grado en Periodismo', primerTrabajo: 'Redes sociales de un restaurante', martes: 'Por la mañana graba tres vídeos, a mediodía los edita y por la tarde mira qué ha funcionado y responde comentarios.' },
        { nombre: 'Leo', edad: 26, prof: 'Anima personajes 3D', profesion: 'Animación 3D', estudio: 'FP de Animación 3D', empezo: 'Dibujando cómics', consejo: 'Descarga Blender y anima una pelota que bota.', cita: 'De pequeño llenaba libretas de cómics.', duracion: '3 min', icono: 'animacion', camino: ['Dibujaba cómics', 'FP de Animación 3D', 'Anima personajes'], estudios: 'Ciclo superior de Animación 3D, Juegos y Entornos Interactivos', primerTrabajo: 'Prácticas en un estudio de publicidad', martes: 'Revisa con el equipo la escena del día, anima un personaje plano a plano y al final lo enseña para recibir comentarios.' },
        { nombre: 'Aitana', edad: 28, prof: 'Protege empresas de ataques', profesion: 'Ciberseguridad', estudio: 'FP de Sistemas', empezo: 'Arreglando ordenadores', consejo: 'Prueba un reto de ciberseguridad para principiantes.', cita: 'Arreglaba los ordenadores de toda mi familia.', duracion: '2 min', icono: 'ciber', camino: ['Arreglaba ordenadores', 'FP de Sistemas', 'Ciberseguridad'], estudios: 'Ciclo superior de Administración de Sistemas y un curso de ciberseguridad', primerTrabajo: 'Soporte técnico en una empresa', martes: 'Revisa las alertas de la noche, busca fallos en una web antes de que los encuentre otro y explica al equipo cómo evitarlos.' },
      ],
    },
    {
      titulo: 'Opción premium: un coach te acompaña',
      texto: 'Para quien quiera ir un paso más allá: sesiones online con un coach para probar esos recorridos en la vida real y decidir qué estudiar.',
      llevas: 'un plan para probar y decidir tú, a tu ritmo.',
      // Videollamada de ejemplo (PLACEHOLDER: coach de muestra, sin foto todavía)
      coach: {
        nombre: 'Laura',
        pregunta: 'De los tres caminos, ¿cuál te dio más energía esta semana?',
        reto: 'Editar un vídeo de 30 segundos sobre tu barrio',
      },
    },
  ],
};

// v5 · demo del test en la propia página (referencia: exploracion/test-probable-propuesta.html).
// La pregunta 1 es la real del test. Las preguntas 2 y 3 y todos los textos del resultado son PLACEHOLDER:
// PENDIENTE CLIENTA: sustituir por preguntas reales y validar los textos con Sara.
export const testDemo = {
  preguntas: [
    { texto: '¿Cómo describirías tu energía natural?', placeholder: false, opciones: [
      { t: 'Creador/a', d: 'Imaginas y construyes cosas nuevas' },
      { t: 'Estratega', d: 'Planificas y resuelves problemas' },
      { t: 'Conector/a', d: 'Unes personas e ideas' },
      { t: 'Explorador/a', d: 'Buscas lo desconocido' },
    ] },
    { texto: '¿Qué te hace perder la noción del tiempo?', placeholder: true, opciones: [
      { t: 'Hacer algo', d: 'Dibujar, montar, cocinar, editar' },
      { t: 'Entender algo', d: 'Saber cómo funciona por dentro' },
      { t: 'Ayudar a alguien', d: 'Que a otro le vaya mejor' },
      { t: 'Un reto', d: 'Superarte o ganar' },
    ] },
    { texto: 'Te apuntas a un proyecto nuevo. ¿Qué haces primero?', placeholder: true, opciones: [
      { t: 'Probar ya', d: 'Y voy corrigiendo' },
      { t: 'Hacer un plan', d: 'Saber por dónde voy' },
      { t: 'Buscar equipo', d: 'Con quién hacerlo' },
      { t: 'Investigar', d: 'Ver qué existe ya' },
    ] },
  ],
  resultado: {
    energias: [
      { t: 'Creador/a', f: 'Te enciende hacer cosas que antes no existían.' },
      { t: 'Estratega', f: 'Ves el problema entero y le encuentras la vuelta.' },
      { t: 'Conector/a', f: 'Lo tuyo es juntar gente e ideas.' },
      { t: 'Explorador/a', f: 'Te tira lo que todavía no conoces.' },
    ],
    mueve: ['Hacer cosas con las manos o la cabeza', 'Entender cómo funcionan', 'Que a otros les vaya mejor', 'Los retos'],
    arranca: ['Probando', 'Con un plan', 'En equipo', 'Investigando'],
  },
};

export const bifurcacion = {
  texto: '¿Ya estás en la universidad o en FP y no te ves en lo tuyo?',
  enlace: 'Esto es para ti',
};

// ---------------------------------------------------------------------------
// Universidad: historias de cambio de rumbo (PLACEHOLDER, sin foto todavía)
// ---------------------------------------------------------------------------
export const historiasUni = {
  etiqueta: 'Cambiaron de rumbo',
  titulo: 'Gente que estudió una cosa y acabó en otra',
  personas: [
    {
      placeholder: true,
      nombre: 'Claudia',
      edad: 27,
      cita: 'Acabé Derecho sabiendo que no quería ejercer.',
      recorrido: ['Estudió Derecho', 'Curso de diseño de producto', 'Ahora diseña muebles'],
    },
    {
      placeholder: true,
      nombre: 'Rubén',
      edad: 26,
      cita: 'Dejé Ingeniería en tercero y no fue un fracaso.',
      recorrido: ['Estudió Ingeniería', 'FP de Sonido', 'Ahora produce pódcast'],
    },
  ],
};

// ---------------------------------------------------------------------------
// Familias: todo en «vosotros»
// ---------------------------------------------------------------------------
export const familiasV4 = {
  ...familiasPagina,
  hero: {
    ...familiasPagina.hero,
    texto:
      'Menos presión y más información para acompañar una decisión importante. Responde vuestro hijo o hija; vosotros recibís lo que decida compartir y una guía para hablarlo en casa.',
  },
  avisoFuturo: 'Así funcionará cuando abramos el test. Si queréis, os avisamos.',
  eleccion: {
    etiqueta: 'Quién hay detrás',
    titulo: 'Cómo elegimos a la gente que sale aquí',
    puntos: [
      'Llevan al menos cinco años en lo suyo.',
      'Comprobamos que trabajan donde dicen.',
      'Ninguno cobra por recomendar una universidad, una carrera o un centro.',
      'Si hace falta un psicólogo y no un coach, lo decimos.',
    ],
    sara: 'Leer la historia de Sara',
  },
};

// Para tener a mano la fuente de los puntos anteriores (prompt «Quién hay detrás»)
export const fuenteEleccion = acompanamiento.eleccion;
