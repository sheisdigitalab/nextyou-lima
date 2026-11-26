// Textos propios de la versión 4 de la portada (/home-v4/). Parten de los de la v3 y solo cambian lo indicado:
// así los datos que usa la v3 no se tocan y las dos versiones se pueden comparar.
import { sara } from './home';
import { unicoLima, comoAppLima, uniNoUnicoLima } from './lima-v3';

// Portada: titular («explorar tu futuro» va a rotulador) y lema del pie
export const heroV4 = {
  antes: 'Te ayudamos a ',
  explora: 'explorar tu futuro',
  despues: '.',
};
export const pieV4 = {
  antes: 'Te ayudamos a ',
  explora: 'explorar',
  despues: ' tu futuro.',
};

// «No eres el único»
export const unicoV4Home = {
  ...unicoLima,
  etiqueta: 'No eres el único que se siente perdido',
  titulo: 'Jóvenes como tú que están dudando sobre qué estudiar y a qué dedicarse',
  resaltado: 'qué estudiar y a qué dedicarse',
};

// Acompañamiento (paso 4 de «Cómo funciona»): nuevo párrafo; la línea «El test, los caminos y las historias son gratis.» se quita en la página
export const comoAppV4 = {
  ...comoAppLima,
  coach: {
    ...comoAppLima.coach,
    texto:
      'Si en el test te gustan las opciones que NextYou te ha sugerido y quieres que te ayudemos a ir a por alguna de ellas, contacta con nuestro servicio de acompañamiento.',
  },
};

// Historias («Los de dentro»)
export const historiasV4 = {
  antetitulo: 'Su camino, contado por ellos',
  tituloAntes: 'Profesionales que te cuentan ',
  tituloU: 'cómo llegaron',
  tituloDespues: ' a dedicarse a lo que hacen hoy',
  sub: 'Cómo entraron, en qué se equivocaron y cómo es su día a día.',
};

// «La uni no es el único camino»: texto de la FP más corto
export const uniV4 = {
  ...uniNoUnicoLima,
  rutas: uniNoUnicoLima.rutas.map((r) => (r.t === 'FP' ? { ...r, x: 'Grado medio + superior de Animación 3D' } : r)),
};

// «La uni no es el único camino»: botón bajo el globo, cerrando la sección

// Sara
export const saraV4 = {
  ...sara,
  etiqueta: 'Por qué existe NextYou',
  titulo: 'Tardé 10 años en llegar a un trabajo que ni sabía que existía',
  resaltado: '10 años',
  // Va seguida del logo de NextYou
  firma: 'Sara, Founder de',
};

// Menú y formulario «Hablemos»
export const hablemosV4 = {
  menu: 'Hablemos',
  titulo: 'Hablemos',
  intro: 'Cuéntanos qué necesitas y te respondemos.',
  gracias: 'Gracias, te responderemos pronto',
  altSocial: 'NextYou. Te ayudamos a explorar tu futuro.',
};
