// Página /acompanamiento/: el acompañamiento opcional de pago (coaches). Parte de la propuesta
// exploracion/acompanamiento-propuesta.html de nextyou-landing.
//
// PENDIENTE CLIENTA:
//  - Precios, número y duración de las sesiones y condiciones de cada plan: son los de la propuesta, a validar.
//  - Los 4 coaches son PERFILES DE EJEMPLO: faltan nombres, fotos, vídeos y formación reales del equipo.
//  - Plazo de cambio, cancelación y devolución de una sesión.
//  - Los botones de reservar no tienen destino real (no hay pasarela de pago).

// Fotos de MUESTRA (banco de imágenes) para los perfiles de ejemplo: sustituir por las de los coaches reales
import fotoLaura from '../assets/muestra/coach-v.jpg';
import fotoMarc from '../assets/muestra/coach-4.jpg';
import fotoNuria from '../assets/muestra/aitana.jpg';
import fotoAlex from '../assets/muestra/leo-v.jpg';

export const hero = {
  etiqueta: 'Acompañamiento opcional de pago',
  titulo: 'Habla con alguien que te ayuda a ordenar tus opciones',
  resaltado: 'ordenar tus opciones',
  texto:
    'El test, tus 3 caminos y los vídeos de Los de dentro son gratis. Si después sigues con dudas, un coach se sienta contigo, por videollamada, a pensar en tu siguiente paso.',
  boton: 'Ver planes y precios',
  chat: {
    etiqueta: 'Sesión con tu coach · por videollamada',
    mensajes: [
      { de: 'tu', texto: 'Me salen Animación 3D y Ciberseguridad y no sé por cuál tirar.' },
      { de: 'coach', texto: 'Vamos a ver qué te atrae de cada una y qué camino tendrías para llegar.' },
      { de: 'tu', texto: '¿Y si elijo mal?' },
      { de: 'coach', texto: 'No vas a decidirlo todo hoy. Vamos a buscar un primer paso que puedas probar.' },
    ],
  },
};

export const queEs = {
  etiqueta: 'Qué es',
  titulo: 'Un espacio para pensar en voz alta, con alguien que sabe',
  resaltado: 'con alguien que sabe',
  si: {
    titulo: 'Qué es',
    puntos: [
      'Sesiones 1 a 1 por videollamada con un coach profesional.',
      'Parte de tus resultados del test: no empezáis de cero.',
      'Comparáis caminos de verdad: duración, qué se estudia, cómo es el trabajo.',
      'Sales con tu plan por escrito, que escribes tú con tu coach.',
    ],
  },
  no: {
    titulo: 'Qué no es',
    puntos: [
      'No es una clase ni un examen.',
      'No decide por ti.',
      'No es un psicólogo ni hace terapia.',
      'No te consigue plaza en ningún sitio.',
      'No le cuenta a tus padres lo que hablas con él.',
    ],
  },
};

export const quienEs = {
  etiqueta: 'Quién hay detrás',
  titulo: 'Los de dentro y los coaches no son lo mismo',
  resaltado: 'no son lo mismo',
  insiders: {
    titulo: 'Los de dentro · gratis',
    texto:
      'Profesionales que te enseñan su trabajo en vídeo. No te aconsejan, no te venden su profesión y no cobran por que elijas la suya.',
  },
  coaches: {
    titulo: 'Los coaches · si tú quieres',
    texto:
      'Te acompañan mientras decides. Parten de tus 3 caminos y te ayudan a ordenar lo que sabes de ti y de cada opción.',
  },
};

export const criterios = {
  etiqueta: 'Cómo los elegimos',
  titulo: 'Cómo elegimos a la gente que sale aquí',
  resaltado: 'que sale aquí',
  items: [
    { dato: '5+', texto: 'Llevan como mínimo cinco años trabajando en lo suyo.' },
    { dato: '✓', texto: 'Comprobamos que trabajan donde dicen que trabajan.' },
    { dato: '0 €', texto: 'Ninguno cobra por recomendarte una universidad, una carrera ni un centro.' },
    { dato: '→', texto: 'Si tu situación necesita un psicólogo y no un coach, te lo decimos.' },
  ],
  frase: 'Si alguien te recomienda algo y cobra por ello, no te está orientando. Es publicidad.',
};

export const comoFunciona = {
  etiqueta: 'Cómo funciona',
  titulo: 'Así es un acompañamiento',
  resaltado: 'un acompañamiento',
  pasos: [
    {
      n: '01',
      titulo: 'Primero, con tu familia',
      texto:
        'En todos los planes, el principio es con tu madre, padre o tutor delante: qué buscáis, qué hace el coach y qué no, y qué se cuenta y qué no.',
    },
    {
      n: '02',
      titulo: 'Después, las sesiones son tuyas',
      texto:
        'Tú y tu coach. Lo que cuentes no se lo contamos a nadie, salvo que estés en peligro. Esa es la única excepción y te la explicamos al empezar.',
    },
    {
      n: '03',
      titulo: 'Entre sesiones, pruebas cosas',
      texto:
        'Tu coach te propone retos, te presenta a alguien de Los de dentro o te ayuda a preparar una conversación. No son deberes: es probar.',
    },
    {
      n: '04',
      titulo: 'Al final, tu plan',
      texto:
        'Lo escribes tú con tu coach. No es un informe sobre ti: es lo que has descubierto y lo que vas a hacer.',
    },
  ],
  nota: 'Tú eliges el ritmo: una sesión a la semana, cada dos semanas o una al mes.',
};

export interface Plan {
  nombre: string;
  para: string;
  precio: string;
  sesiones: string;
  incluye: string[]; // admite <b>…</b>
  familia: string; // admite <b>…</b>
  boton: string;
  recomendado?: boolean;
}

export const planes = {
  etiqueta: 'Planes y precios',
  titulo: 'Elige cuánto acompañamiento quieres',
  resaltado: 'acompañamiento',
  lista: [
    {
      nombre: 'Resolver dudas',
      para: 'Tienes una duda concreta y quieres hablarla con alguien que sabe.',
      precio: '49 €',
      sesiones: '1 sesión de 45 min · los primeros 10 con tu familia',
      incluye: [
        'Empezáis con tu familia: qué buscáis y cómo funciona',
        'Repasáis juntos tus 3 caminos',
        'Resuelves las dudas que traigas',
        'Te llevas por escrito tu siguiente paso',
      ],
      familia: '<b>Para tu familia:</b> están al principio y saben qué se va a hablar.',
      boton: 'Reservar sesión',
    },
    {
      nombre: 'Comparar caminos',
      para: 'Dudas entre varias opciones y quieres compararlas con calma.',
      precio: '149 €',
      sesiones: '1 sesión con tu familia + 3 sesiones tuyas de 45 min',
      incluye: [
        '<b>Con tu familia:</b> qué buscáis y cómo vais a trabajar',
        '<b>1.ª:</b> qué te mueve y qué te atrae de cada camino',
        '<b>2.ª:</b> comparáis uni, FP y cursos: duración, nota de corte, coste y salidas',
        '<b>3.ª:</b> eliges un primer paso para probar',
        'Tu plan por escrito y la comparativa de tus caminos',
        'Dudas por mensaje mientras dure',
      ],
      familia: '<b>Para tu familia:</b> la sesión del principio y la comparativa con centros, notas de corte y precios reales.',
      boton: 'Empezar acompañamiento',
      recomendado: true,
    },
    {
      nombre: 'Decidir con calma',
      para: 'Tienes que elegir pronto y quieres hacerlo bien acompañado.',
      precio: '249 €',
      sesiones: '2 sesiones con tu familia + 4 sesiones tuyas de 45 min',
      incluye: [
        'Todo lo de «Comparar caminos»',
        'Una cuarta sesión para cerrar tu plan',
        'Charla de 20 min con un profesional de tu camino',
        '<b>Sesión final con tu familia:</b> les cuentas tú lo que has decidido',
        'Un mes de dudas por mensaje después',
      ],
      familia: '<b>Para tu familia:</b> están al principio y al final, y lo escuchan de ti.',
      boton: 'Empezar acompañamiento',
    },
  ] as Plan[],
  tabla: {
    titulo: 'Qué incluye cada plan',
    columnas: ['Resolver dudas', 'Comparar caminos', 'Decidir con calma'],
    filas: [
      ['Sesión con tu familia al empezar', '10 min', '✓', '✓'],
      ['Sesiones tuyas con tu coach (45 min)', '1', '3', '4'],
      ['Tu plan por escrito', 'Siguiente paso', '✓', '✓'],
      ['Comparativa con notas de corte, centros y precios', '—', '✓', '✓'],
      ['Dudas por mensaje', '—', 'Mientras dure', 'Mientras dure + 1 mes'],
      ['Charla con un profesional de tu camino', '—', '—', '✓'],
      ['Sesión final con tu familia', '—', '—', '✓'],
    ],
  },
  nota: 'Precios con IVA incluido. Si eres menor de edad, la reserva la hace tu madre, padre o tutor.',
};

export const coaches = {
  etiqueta: 'Los coaches',
  titulo: 'Conoce a quien te va a acompañar',
  resaltado: 'te va a acompañar',
  texto: 'Antes de reservar, mira quiénes son y cómo trabajan. Cada uno te lo cuenta en un vídeo corto.',
  nota: 'Perfiles de ejemplo: pendientes de nombres, fotos, vídeos y formación reales del equipo',
  // PLACEHOLDER: perfiles de ejemplo
  personas: [
    { foto: fotoLaura, nombre: 'Laura', edad: 38, rol: 'Pedagoga · FP y salidas técnicas', cita: 'No te voy a decir qué estudiar. Te voy a ayudar a verlo claro.', duracion: '1 min' },
    { foto: fotoMarc, nombre: 'Marc', edad: 41, rol: 'Psicólogo · Dudas y miedo a equivocarse', cita: 'Dudar a los 17 es lo normal. Lo raro sería tenerlo claro.', duracion: '1 min' },
    { foto: fotoNuria, nombre: 'Nuria', edad: 35, rol: 'Orientadora · Universidad y acceso', cita: 'Las notas de corte asustan menos cuando las entiendes.', duracion: '1 min' },
    { foto: fotoAlex, nombre: 'Álex', edad: 33, rol: 'Coach · Estudios creativos y cambios de camino', cita: 'Yo cambié de camino dos veces. Se puede.', duracion: '1 min' },
  ],
};

export const preguntas = {
  etiqueta: 'Preguntas frecuentes',
  titulo: 'Lo que suele preguntarse',
  resaltado: 'suele preguntarse',
  lista: [
    {
      p: '¿Tengo que hacer el test antes?',
      r: 'Sí. El coach trabaja a partir de tus 3 caminos, así la primera sesión ya empieza con información sobre ti. El test es gratis.',
    },
    {
      p: '¿Puedo elegir coach?',
      r: 'Sí. Al reservar eliges con quién quieres hablar. Si no lo tienes claro, te asignamos el que mejor encaja con tus caminos.',
    },
    {
      p: '¿Mis padres se enteran de lo que hablo con el coach?',
      r: 'No. Tu familia está al principio (y al final en «Decidir con calma»), pero las sesiones son tuyas y lo que cuentas no se comparte, salvo que estés en peligro.',
    },
    {
      p: '¿Y si no puedo ir a una sesión?',
      r: 'Puedes cambiarla avisando con antelación.',
      pendiente: 'Pendiente: plazo de cambio y política de cancelación y devolución',
    },
    {
      p: 'Soy madre o padre: ¿por qué pagar si hay orientador en el instituto?',
      r: 'El orientador del centro atiende a muchos alumnos a la vez. Aquí las sesiones son solo para tu hijo o hija, parten de sus resultados, empezáis juntos y se lleva un plan por escrito con datos reales de centros, notas y precios.',
    },
    {
      p: '¿Me vais a decir qué tengo que estudiar?',
      r: 'No. Te ayudamos a ordenar lo que sabes de ti y de cada camino para que la decisión sea tuya.',
    },
  ] as Array<{ p: string; r: string; pendiente?: string }>,
};

export const cierre = {
  titulo: '¿Empezamos por el test?',
  resaltado: 'el test',
  texto: 'Es gratis y te da tus 3 caminos. Después decides si quieres acompañamiento.',
  boton: 'Haz el test gratis',
};

export const meta = {
  titulo: 'Acompañamiento con un coach · NextYou',
  descripcion:
    'Sesiones 1 a 1 por videollamada con un coach profesional para ordenar tus opciones después del test. Opcional y de pago; el test y tus 3 caminos son gratis.',
};
