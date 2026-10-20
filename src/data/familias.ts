// Contenido de la página para familias. Para cambiar textos, se cambian aquí.
//
// Fuentes (repositorio de diseño): Voicebook (voz para padres), «Arquetipos y concepto
// comunidad» (Aliada Lúcida), journeys («Faro Compartido»), 03-arquitectura (compartir y
// datos) y el prompt «Quién hay detrás» (acompañamiento con coach).
// No se afirma nada que no esté en esa documentación.

export const familiasPagina = {
  titulo: 'Mi hijo no sabe qué estudiar: cómo acompañarle · NextYou',
  descripcion:
    '¿Tu hijo o hija no sabe qué estudiar? Orientación vocacional para acompañarle sin decidir en su lugar: qué ves tú, qué no y cómo hablarlo en casa.',

  hero: {
    etiqueta: 'Para madres, padres y tutores',
    titulo: 'Acompañar no es decidir por ellos.',
    resaltado: 'no es decidir',
    texto:
      'Menos presión y más información para acompañar una decisión importante. Responde tu hijo o hija; tú recibes lo que decida compartir y una guía para hablarlo en casa.',
    principal: 'Enviarle la experiencia',
    secundario: 'Hacerlo juntos',
    meta: ['8 minutos', 'gratis', 'responde él o ella'],
  },

  porque: {
    etiqueta: 'Por qué funciona así',
    titulo: 'Cuando se impone, no funciona.',
    texto:
      'Si la orientación llega como una obligación, se rechaza. Por eso aquí el primer paso lo da quien va a decidir, y la familia acompaña con información, no con presión.',
    ideas: [
      { titulo: 'Explorar antes reduce decisiones impulsivas', texto: 'Probar un camino una semana cuesta menos que descubrirlo después de un año de matrícula.' },
      { titulo: 'Un camino diferente también puede ser sólido', texto: 'Universidad, FP, cursos o proyectos: el reto es encontrar la combinación que tiene sentido para cada persona.' },
      { titulo: 'Ningún resultado es una sentencia', texto: 'Salen tres caminos para explorar, no una etiqueta. Su perfil cambia a medida que prueba cosas.' },
    ],
  },

  modos: {
    etiqueta: 'Dos formas de empezar',
    titulo: 'Juntos ahora, o se lo enviáis.',
    opciones: [
      {
        nombre: 'Hacerlo juntos',
        texto: 'Os sentáis a su lado y empieza él o ella. A partir de la primera pantalla responde quien va a decidir; podéis acompañar sin sugerir respuestas.',
        puntos: ['8 minutos', 'Se puede parar y seguir otro día'],
      },
      {
        nombre: 'Enviarle la experiencia',
        texto: 'Os damos un enlace privado para mandárselo por vuestro canal. No pedimos su correo. Cuando lo termine, recibís lo que haya decidido compartir.',
        puntos: ['Sin crear cuenta', 'Un recordatorio como mucho'],
      },
    ],
  },

  compartir: {
    etiqueta: 'Qué ves tú y qué no',
    titulo: 'Él o ella decide qué se comparte.',
    niveles: [
      { nombre: 'Solo los tres caminos', texto: 'Los nombres de las tres profesiones que le han salido.' },
      { nombre: 'Los caminos y por qué le salen', texto: 'Con la explicación de cada uno. Es la opción que aparece marcada por defecto.' },
      { nombre: 'El informe entero', texto: 'Todo lo que ha recibido, con los retos para probar.' },
    ],
    nunca: [
      'Sus respuestas una a una. Nunca.',
      'Nada que no haya decidido compartir.',
      'Si no lo comparte, no le llega nada a nadie.',
    ],
    nota: 'Puede cambiar lo que se ve o anular el enlace cuando quiera.',
  },

  guia: {
    etiqueta: 'La guía para hablarlo',
    titulo: 'Con lo que comparta, os llega una guía para la conversación.',
    puntos: [
      { titulo: 'Tres preguntas abiertas por camino', texto: 'Para que la conversación empiece por lo que le interesa, no por lo que os preocupa.' },
      { titulo: 'Una frase que conviene evitar', texto: 'La que suele cerrar la conversación antes de empezar.' },
      { titulo: 'Una forma de apoyar sin tomar el control', texto: 'Algo concreto que podéis hacer esa semana.' },
    ],
  },

  coach: {
    etiqueta: 'Si queréis acompañamiento',
    titulo: 'Sesiones con un coach, con la familia al principio y al final.',
    pasos: [
      { titulo: 'La primera sesión es con la familia delante', texto: 'Se habla de qué buscáis, qué puede hacer el coach y qué no, y qué se cuenta y qué no.' },
      { titulo: 'Después, las sesiones son suyas', texto: 'Una al mes, online. Lo que cuente ahí no se comparte, salvo que esté en peligro.' },
      { titulo: 'La última sesión también es en familia', texto: 'Cuenta lo que ha descubierto y qué va a hacer. Es una conversación que dirige él o ella.' },
    ],
    noHace: ['No decide por él o ella.', 'No es psicología ni terapia.', 'No consigue plaza en ningún sitio.', 'No os cuenta lo que hablan en las sesiones.'],
    nota: 'Se cancela cuando queráis.',
  },

  datos: {
    etiqueta: 'Sus datos',
    titulo: 'Lo que se guarda, y cómo.',
    puntos: [
      'Sus respuestas se guardan cifradas y aparte.',
      'Las estadísticas de uso no reciben ni respuestas ni correos.',
      'Las respuestas se pueden corregir y borrar.',
    ],
  },

  preguntas: {
    etiqueta: 'Preguntas',
    titulo: 'Lo que suelen preguntar las familias.',
    lista: [
      {
        p: '¿Esto es un test?',
        r: 'Es una exploración de ocho minutos con tareas reales de profesionales. No mide lo que se le da bien ni predice nada: propone tres caminos para probar.',
      },
      {
        p: '¿Y si ninguno de los tres le convence?',
        r: 'También es información útil. Puede corregir lo que no le representa, descartar un camino diciendo por qué y probar otro.',
      },
      {
        p: '¿Vamos a ver sus respuestas?',
        r: 'No. Veréis solo lo que decida compartir: los caminos, los caminos con su explicación o el informe entero. Las respuestas una a una, nunca.',
      },
    ],
  },

  cierre: {
    titulo: 'El primer paso lo da él o ella. Vosotros, a su lado.',
    boton: 'Enviarle la experiencia',
  },
};
