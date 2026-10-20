// Página para universitarios y estudiantes de FP: recorrido «Giro de Rumbo».
//
// Fuente: «journeys_long version» (Journey 2 — Giro de Rumbo) de la documentación del proyecto
// (nextyou/fuentes/texto). Los textos entre comillas allí se usan tal cual; «paths» se dice
// «caminos», como en el resto de la web. No se afirma nada que no esté en esa documentación.
// PENDIENTE: validar con Sara (en el plan, este recorrido es un incremento posterior al MVP).

export const universidad = {
  titulo: '¿No te ves trabajando de lo que estudias? Explora otras rutas · NextYou',
  descripcion:
    'Para universitarios y estudiantes de FP: en menos de 8 minutos separa tu título de tus posibilidades. Tres caminos para explorar, sin que nadie te diga que lo dejes.',

  hero: {
    etiqueta: 'Estoy en la universidad o en FP',
    titulo: '¿No te ves trabajando de lo que estudias?',
    resaltado: 'de lo que estudias',
    lema: 'Lo que estudias no tiene por qué decidir todo lo que puedes llegar a hacer.',
    texto:
      'En menos de 8 minutos separa tu título de tus posibilidades. Recibirás tres caminos: uno que aprovecha lo aprendido, uno que gira tus capacidades y uno para explorar desde cero.',
    boton: 'Explorar otras rutas',
    meta: ['menos de 8 minutos', 'gratis', 'no te diremos que lo dejes'],
  },

  situacion: {
    etiqueta: 'Empieza por dónde estás',
    titulo: 'Recalcular la ruta, no borrar el recorrido.',
    texto: 'Primero eliges en qué punto estás. Nada de esto te compromete a nada.',
    opciones: ['Seguir pero redirigir', 'Acabar y cambiar', 'No sé si dejarlo', 'Solo quiero explorar'],
  },

  conservar: {
    etiqueta: 'Lo que ya llevas contigo',
    titulo: 'Eliges hasta dos cosas que quieres conservar.',
    texto: 'Sirven para encontrar caminos cercanos y explicar el puente entre lo que sabes y lo que puedes probar.',
    activos: ['Conocimientos', 'Herramientas', 'Red de contactos', 'Experiencia práctica', 'Ninguno claro'],
    nota: 'Si no tienes ninguno claro, no pasa nada: no significa que no tengas habilidades. Te proponemos cómo descubrirlas.',
  },

  caminos: {
    etiqueta: 'Tus tres caminos',
    titulo: 'Conserva, gira o explora. Sin ranking.',
    lista: [
      { nombre: 'Conserva', texto: 'Un camino cercano que aprovecha tu formación o tu experiencia actual.' },
      { nombre: 'Gira', texto: 'Intereses parecidos, pero en otro contexto, sector o tipo de problema.' },
      { nombre: 'Explora', texto: 'Un camino más lejano, con un experimento barato antes de decidir nada.' },
    ],
  },

  informe: {
    etiqueta: 'Lo que recibes',
    titulo: 'Para cada camino, lo que necesitas para decidir con calma.',
    puntos: [
      { titulo: 'Lo que puedes aprovechar', texto: 'Qué parte de lo que ya sabes te sirve en ese camino.' },
      { titulo: 'Lo lejos que queda', texto: 'Una estimación de la distancia del cambio: baja, media o alta.' },
      { titulo: 'Qué necesitarías comprobar', texto: 'Las preguntas que conviene responder antes de dar un paso.' },
      { titulo: 'Un experimento reversible', texto: 'Algo que puedes probar en 60 a 90 minutos, sin dejar nada.' },
    ],
  },

  noVaAPasar: [
    'No te vamos a decir que dejes tus estudios.',
    'No te pedimos universidad, notas, CV ni teléfono.',
    'No hay un camino «bueno»: los tres están al mismo nivel.',
    'No te damos sueldos ni empleabilidad inventados.',
  ],

  acompanamiento: {
    etiqueta: 'Si quieres compañía',
    titulo: 'No necesitas decidir hoy si dejar tus estudios.',
    texto:
      'Un coach te acompaña a contrastar opciones, probarlas y diseñar una transición que puedas sostener. No decide por ti, y lo cancelas cuando encuentres tu solución.',
  },

  cierre: {
    titulo: 'Lo que estudias es un punto de partida, no el destino.',
    boton: 'Explorar otras rutas',
  },
};
