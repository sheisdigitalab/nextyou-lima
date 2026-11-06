// Textos de la versión 3 de la portada (/home-v3/): los de la v2 con los cambios de texto y el nuevo esquema de «Cómo llegar».
// recoge los cambios de la última revisión con la clienta. Las fotos son DE MUESTRA (placeholder).
import { unicoV4 } from './v4';
import { comoAppV7 } from './v7';
import { uniNoUnico } from './home';
import nil from '../assets/muestra/joven-nil.jpg';
import irene from '../assets/muestra/joven-irene.jpg';
import jan from '../assets/muestra/joven-jan.jpg';
import sofia from '../assets/muestra/joven-sofia.jpg';

const fotos: Record<string, { foto: ImageMetadata; alt: string }> = {
  Nil: { foto: nil, alt: 'Nil, con sudadera negra, sentado en el suelo de una calle.' },
  Irene: { foto: irene, alt: 'Irene, con gafas y rebeca gris, delante de un mural de colores.' },
  Jan: { foto: jan, alt: 'Jan, de pelo rizado y jersey azul, mira a cámara entre la vegetación.' },
  Sofía: { foto: sofia, alt: 'Sofía, con mochila y auriculares al cuello, sale del instituto con sus apuntes.' },
};

// «No eres el único»: titular que dice de qué va y fotos más reales
export const unicoLima = {
  ...unicoV4,
  titulo: 'Jóvenes como tú que aún dudan sobre qué estudiar y a qué dedicarse',
  resaltado: 'qué estudiar y a qué dedicarse',
  // Comentario #18 de Elías: las preguntas que de verdad se hacen
  preguntas: '¿Qué estudio? ¿En qué trabajaré? ¿Me gustará? ¿Podrá ser mi forma de vida?',
  // La cita de «Mis amigos lo tienen claro y yo no.» pasa a Alba: ya hay otra Irene en el carrusel y cada persona sale una sola vez
  personas: unicoV4.personas.map((p) => {
    const q = { ...p, ...(fotos[p.nombre] ?? {}) };
    return p.nombre === 'Irene'
      ? { ...q, nombre: 'Alba', edad: 18, cita: 'Mis amigos lo tienen claro y yo no.', alt: 'Alba, con gafas y rebeca gris, delante de un mural de colores.' }
      : q;
  }),
};

// «Cómo funciona»: el paso 2 explica qué pasa al tocar un camino (en qué consiste, cómo llegar y contratar un coach) y el paso 3
// no promete un vídeo por camino, sino consejos y vídeos de personas que pasaron por algo parecido
export const comoAppLima = {
  ...comoAppV7,
  // Comentario #28 de Elías: el acompañamiento es opcional y de pago. PENDIENTE CLIENTA: botón con los precios (los pasa Sara)
  coach: {
    eti: 'Acompañamiento opcional de pago',
    titulo: 'Un profesional te ayuda a ordenar tus opciones',
    texto: 'Si después del test todavía tienes dudas, puedes reservar sesiones individuales online con un coach profesional. Revisaréis tus tres caminos, trabajaréis tus preguntas y pensaréis qué paso te gustaría dar después.',
    puntos: [
      'Sesiones individuales por videollamada',
      'Orientación personalizada sobre tus tres caminos',
      'Ayuda para comparar opciones y definir próximos pasos',
    ],
  },
  pasos: comoAppV7.pasos.map((p, i) =>
    i === 0
      ? {
          ...p,
          titulo: 'Haces un test para descubrir qué te motiva',
          puntos: [
            '<b>12 preguntas</b> · unos 8 minutos',
            '<b>Descubres</b> tus motivaciones y tu forma de ser',
            '<b>Repítelo</b> cuando quieras: si cambian tus respuestas, cambian tus caminos',
          ],
        }
      : i === 1
        ? {
            ...p,
            titulo: 'Recibes 3 caminos profesionales que encajan contigo',
            texto: 'Al terminar el test te proponemos 3 profesiones que encajan contigo, cada una por un motivo distinto:',
            puntos: [
              '<b>El que más te pega</b>: el que mejor coincide con tus respuestas',
              '<b>El puente</b>: el que conecta con intereses que ya tienes',
              '<b>El salto</b>: una opción nueva que quizás no te habías planteado',
            ],
          }
        : i === 2
          ? {
              ...p,
              eti: 'Gente real',
              titulo: 'Historias de profesionales para inspirarte',
              texto: 'Gratis. Personas que trabajan en distintos ámbitos te cuentan qué estudiaron, cómo empezaron y qué cambios hicieron hasta llegar a su profesión. Sus trayectorias pueden darte ideas para explorar tus opciones. Las entrevistas disponibles varían según la profesión.',
              puntos: [
                '<b>Entrevistas en vídeo</b> con profesionales de distintos sectores',
                '<b>Historias de personas</b> que llegaron a su trabajo por caminos diferentes',
                '<b>Consejos e ideas</b> para seguir explorando',
              ],
              cierre: 'NextYou no es solo un test: es conocer las profesiones que existen y los caminos para llegar a ellas, pensando también en la vida que quieres construir.',
            }
          : p
  ),
};

// «¿Qué es NextYou?» (comentario #19 de Elías): más concreto y sin hablar de una «comunidad» que aún no está definida
export const queEsLima = {
  lema: 'La plataforma para explorar qué estudiar y a qué dedicarte.',
  resaltado: 'qué estudiar y a qué dedicarte',
  texto:
    'Descubre profesiones que no sabías que existían y conoce a quien ya trabaja en ellas, antes de decidir qué estudiar.',
};

// «Cómo llegar · La uni no es el único camino» (v3): tres caminos (los de Elías) hacia una misma profesión, la Animación 3D de la ficha del paso 2.
// Los datos coinciden con esa ficha. PENDIENTE CLIENTA: contenido de ejemplo.
export const uniNoUnicoLima = {
  ...uniNoUnico,
  texto:
    'Hay muchas formas de llegar a una profesión. Por ejemplo, a la animación 3D se puede llegar por la universidad, por una FP o combinando cursos y trabajo. Lo importante es encontrar el camino que encaja contigo.',
  rutas: [
    { t: 'Universidad', d: '4 años', x: 'Grado en Animación' },
    { t: 'FP', d: '2 + 2 años', x: 'Un grado medio y después el superior de Animación 3D' },
    { t: 'Curso, trabajo y especialización', d: '1 + 2 + 1 años', x: 'Un curso de animación 3D, dos años trabajando y uno para especializarte' },
  ] as { t: string; d: string; x?: string }[],
};
