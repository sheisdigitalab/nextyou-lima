// Contenido de la página de acompañamiento (Insiders y coaches).
// Fuente: prompt «Quién hay detrás · versión larga» del repositorio de diseño.
// PENDIENTE: precio del acompañamiento con coach.

export const acompanamiento = {
  titulo: 'Quién hay detrás · NextYou',
  descripcion:
    'Los Insiders te enseñan su trabajo por dentro, gratis. Los coaches te acompañan mientras decides, si tú quieres. Así funciona cada uno.',

  hero: {
    etiqueta: 'Quién hay detrás',
    titulo: 'Nadie que no haya estado donde tú estás.',
    resaltado: 'donde tú estás.',
    texto:
      'Detrás de NextYou hay dos tipos de personas. Los que te enseñan su trabajo por dentro, y los que te acompañan mientras decides. No son lo mismo y conviene que lo sepas antes de empezar.',
  },

  insiders: {
    etiqueta: 'Los Insiders · gratis',
    titulo: 'Los que te enseñan su trabajo.',
    texto:
      'Graban cómo es su día a día real. No te aconsejan, no te venden su profesión y no cobran por que elijas la suya. Solo te la enseñan para que decidas con más información.',
  },

  eleccion: {
    etiqueta: 'Cómo los elegimos',
    titulo: 'Cómo elegimos a la gente que sale aquí.',
    puntos: [
      'Llevan como mínimo cinco años trabajando en lo suyo.',
      'Comprobamos que trabajan donde dicen que trabajan.',
      'Ninguno cobra por recomendarte una universidad, una carrera ni un centro.',
      'Si tu situación necesita un psicólogo y no un mentor, te lo decimos.',
    ],
    remate: 'Si alguien te recomienda algo y cobra por ello, no es un mentor. Es publicidad.',
  },

  coach: {
    etiqueta: 'Los coaches · si tú quieres',
    titulo: 'Y si decides hablar con un coach, esto es lo que pasa.',
    pasos: [
      {
        titulo: 'La primera sesión es con tu familia delante',
        texto: 'Se habla de qué buscáis, qué puede hacer el coach y qué no, y qué se cuenta y qué no. Que quede claro desde el principio evita la mitad de los problemas.',
        pastillas: ['1 hora', 'online'],
      },
      {
        titulo: 'A partir de ahí, las sesiones son tuyas',
        texto: 'Una al mes, tú y tu coach. Lo que cuentes ahí no se lo contamos a nadie, salvo que estés en peligro. Esa es la única excepción y te la explicamos en la primera sesión.',
        pastillas: ['1 al mes', '45 min'],
      },
      {
        titulo: 'Entre sesión y sesión, pruebas cosas',
        texto: 'Tu coach te propone retos, te presenta a algún Insider o te ayuda a preparar una conversación que te da pereza. No son deberes: es probar.',
        pastillas: ['a tu ritmo'],
      },
      {
        titulo: 'La última sesión también es con tu familia',
        texto: 'Cuentas tú lo que has descubierto y qué vas a hacer. No es un informe sobre ti: es una conversación que diriges tú.',
        pastillas: ['1 hora', 'online'],
      },
    ],
  },

  noHace: {
    titulo: 'Lo que un coach no hace',
    puntos: [
      'No decide por ti.',
      'No es un psicólogo ni hace terapia.',
      'No te consigue plaza en ningún sitio.',
      'No le cuenta a tus padres lo que hablas con él.',
    ],
  },

  cierre: {
    titulo: 'Empieza por lo gratis. Lo demás, si tú quieres.',
    boton: 'Haz el test gratis',
  },
};
