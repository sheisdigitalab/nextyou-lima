// Textos de la versión 2 de la portada (/home-v2/): los de lima.ts más los cambios de los comentarios de Elías del 4 de noviembre.
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
  preguntas: '¿Qué estudio y en qué trabajaré? ¿Me gustará mi próximo trabajo? ¿Me hará feliz?',
  personas: unicoV4.personas.map((p) => ({ ...p, ...(fotos[p.nombre] ?? {}) })),
};

// «Cómo funciona»: el paso 2 explica qué pasa al tocar un camino (en qué consiste, cómo llegar y contratar un coach) y el paso 3
// no promete un vídeo por camino, sino consejos y vídeos de personas que pasaron por algo parecido
export const comoAppLima = {
  ...comoAppV7,
  pasos: comoAppV7.pasos.map((p, i) =>
    i === 0
      ? {
          ...p,
          titulo: 'Haces un test para descubrir qué te motiva',
          puntos: [
            '12 preguntas · unos 8 minutos',
            'Descubres tus motivaciones y tu forma de ser',
            'Puedes repetirlo cuando quieras; tus resultados dependen de tus respuestas',
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
            cierre: 'No tienes que elegir ya: toca un camino para ver en qué consiste y cómo llegar a él. Si quieres ayuda para decidir, puedes contratar a un coach desde ahí mismo.',
          }
        : i === 2
          ? {
              ...p,
              eti: 'Inspirarme con trayectorias reales',
              titulo: 'Historias de profesionales para inspirarte',
              texto: 'De forma gratuita, puedes conocer a personas que trabajan en distintos ámbitos. En sus entrevistas cuentan qué estudiaron, cómo empezaron y qué cambios hicieron hasta llegar a su profesión. Sus trayectorias pueden darte ideas para explorar tus opciones; las entrevistas disponibles varían según la profesión.',
              puntos: [
                'Entrevistas en vídeo con profesionales de distintos sectores',
                'Historias de personas que llegaron a su trabajo por caminos diferentes',
                'Consejos e ideas para seguir explorando',
              ],
              cierre: 'NextYou no es solo un test: es conocer las distintas carreras y profesiones que existen para llegar a una que te guste y con la que puedas vivir bien.',
            }
          : p
  ),
};

// «¿Qué es NextYou?» (comentario #19 de Elías): más concreto y sin hablar de una «comunidad» que aún no está definida
export const queEsLima = {
  lema: 'La plataforma para explorar qué estudiar y a qué dedicarte.',
  resaltado: 'qué estudiar y a qué dedicarte',
  texto:
    'Te ayuda a descubrir opciones profesionales que conectan con tus intereses antes de tomar una decisión y te inspira con historias reales de personas que no sabían por dónde empezar y ahora trabajan en algo que les gusta.',
};

// «La uni no es el único camino» (comentario #30 de Elías): tres caminos con su duración, en lugar de cinco que se juntan en un punto.
// Duraciones orientativas, para que se vea que cada camino lleva un tiempo distinto.
export const uniNoUnicoLima = {
  ...uniNoUnico,
  rutas: [
    { t: 'Universidad', d: '4 años' },
    { t: 'FP de grado medio y superior', d: '2 + 2 años' },
    { t: 'Cursos, trabajo y más cursos', d: '1 + 2 + 1 años' },
  ],
};
