// Textos y fotos propios de la versión Lima (/lima/): partiendo de los de la portada actual,
// recoge los cambios de la última revisión con la clienta. Las fotos son DE MUESTRA (placeholder).
import { unicoV4 } from './v4';
import { comoAppV7 } from './v7';
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
  titulo: 'Chicos y chicas de tu edad que tampoco tienen claro su futuro',
  resaltado: 'tampoco tienen claro su futuro',
  personas: unicoV4.personas.map((p) => ({ ...p, ...(fotos[p.nombre] ?? {}) })),
};

// «Cómo funciona»: el paso 2 invita a tocar un camino (y a hablar con un coach) y el paso 3
// no promete un vídeo por camino, sino consejos y vídeos de personas que pasaron por algo parecido
export const comoAppLima = {
  ...comoAppV7,
  pasos: comoAppV7.pasos.map((p, i) =>
    i === 1
      ? {
          ...p,
          texto: 'Con tus respuestas te proponemos 3 profesiones que encajan contigo, cada una por un motivo distinto. Toca una para ver en qué consiste y cómo llegar:',
          cierre: 'No tienes que elegir ya. Y si quieres ayuda para decidir, puedes hablar con un coach desde ahí.',
        }
      : i === 2
        ? {
            ...p,
            titulo: 'Te orienta gente que pasó por un momento parecido',
            texto: 'Junto a tus 3 caminos recibes consejos y vídeos de personas que han pasado por un momento parecido al tuyo. Te cuentan cómo lo vivieron y pueden orientarte.',
            puntos: [
              'Consejos para dar el primer paso',
              'Vídeos de personas que han estado donde tú estás',
              'Compruebas qué te encaja, sin hacerlo solo',
            ],
          }
        : p
  ),
};
