// «Cómo llegar» de la página de resultados (/resultados/ y /resultados-crema/): formato anterior, ahora solo Ciberseguridad.
// Creación de contenido y Animación 3D usan la versión nueva (como-llegar-v2.ts).
// Un solo archivo para actualizar cada año: profesión → vía → comunidad.
//
// Datos oficiales del curso 2026-27 (los que pasó la clienta). No se añade ningún dato más: lo que falta sale como
// «Aún no tenemos…» o «Pregunta en el centro». Notas de corte redondeadas a 1 decimal.
// Lenguaje: «selectividad», «al año», «vinculado a». Nunca «PAU», «créditos», «adscrita» ni «cupo».

export type Ccaa = 'cat' | 'mad' | 'val' | 'and';
// '' = todavía no ha elegido dónde vive · 'otra' = una comunidad de la que no tenemos datos
export type Estado = '' | Ccaa | 'otra';

export const ESTADOS: Estado[] = ['', 'cat', 'mad', 'val', 'and', 'otra'];

export const COMUNIDADES: { id: Ccaa | 'otra'; nombre: string; dondeEn?: string }[] = [
  { id: 'cat', nombre: 'Cataluña', dondeEn: 'Cataluña' },
  { id: 'mad', nombre: 'Madrid', dondeEn: 'Madrid' },
  { id: 'val', nombre: 'C. Valenciana', dondeEn: 'C. Valenciana' },
  { id: 'and', nombre: 'Andalucía', dondeEn: 'Andalucía' },
  { id: 'otra', nombre: 'Otra' },
];

export const TEXTOS = {
  elige: 'Elige dónde vives arriba para ver centros y precios cerca de ti',
  sinDatos: 'Todavía no tenemos centros y precios de tu comunidad.',
  datoSinElegir: 'Elige dónde vives arriba para ver el dato',
  datoSinDatos: 'Aún no tenemos este dato de tu comunidad',
  notaDeCorte: { pregunta: '¿Qué es la nota de corte?', respuesta: 'La nota del último alumno que entró el año pasado, sobre 14. Cambia cada año.' },
  pie: 'Datos oficiales del curso 2026-27. Pueden cambiar: confirma siempre en la web del centro.',
};

export interface Dato {
  valor: string;
  nota?: string; // aclaración pequeña bajo el valor
}

export interface Centro {
  nombre: string;
  lugar?: string;
  tipo?: 'Pública' | 'Privada';
  etiquetas?: string[]; // «Nota 7», «1.060 €/año», «Entrevista»…
}

// Lo que cambia según dónde vives
export interface Lugar {
  nota?: Dato;
  cuesta?: Dato;
  centros?: Centro[];
  // Aviso bajo la lista (p. ej. «Aún no tenemos el resto de centros de Cataluña.»)
  resto?: string;
  bueno?: string;
}

export interface Via {
  titulo: string; // corto, en grande
  oficial: string; // nombre oficial, en gris
  duracion: string;
  meses: number | null; // solo para la barrita; null = sin barra
  icono: 'uni' | 'fp' | 'curso' | 'solo';
  frase: string;
  necesitas: Dato;
  // Valores cuando no hay dato de la comunidad (si faltan, sale «Depende del centro» + aviso)
  nota?: Dato;
  cuesta?: Dato;
  // true = esta vía tiene bloque «Dónde» y datos que cambian con la comunidad
  depende?: boolean;
  lugares?: Partial<Record<Ccaa, Lugar>>;
  // Centros que valen para cualquier comunidad (p. ej. UNIR, online)
  centrosTodas?: Centro[];
  // «Bueno saber» que no depende de la comunidad
  bueno?: string;
}

const BACH_SELE: Dato = { valor: 'Bachillerato y selectividad', nota: 'O venir de una FP de Grado Superior' };
const BACH_FP: Dato = { valor: 'Bachillerato', nota: 'O un Grado Medio antes, o una prueba de acceso' };
const NOTA_MEDIA: Dato = { valor: 'Tu nota media', nota: 'Las plazas se dan por nota' };
const PUBLICO_360: Dato = { valor: '360 € al año', nota: 'En instituto público' };
const PREGUNTA_CENTRO: Dato = { valor: 'Pregunta en el centro', nota: 'El precio cambia según el centro' };

export const comoLlegar: Record<string, Via[]> = {
  // ======================= CIBERSEGURIDAD =======================
  ciberseguridad: [
    {
      titulo: 'Universidad',
      oficial: 'Grado en Ingeniería de la Ciberseguridad',
      duracion: '4 años',
      meses: 48,
      icono: 'uni',
      frase: 'Estudias cómo funcionan los sistemas y cómo se protegen durante cuatro años.',
      necesitas: BACH_SELE,
      depende: true,
      centrosTodas: [{ nombre: 'UNIR', lugar: 'Online', tipo: 'Privada', etiquetas: ['Sin nota de corte', 'Pregunta el precio'] }],
      lugares: {
        mad: {
          nota: { valor: '10,5', nota: 'Piden nota alta' },
          cuesta: { valor: 'Unos 1.100 € al año' },
          centros: [{ nombre: 'Universidad Rey Juan Carlos (URJC)', lugar: 'Móstoles', tipo: 'Pública', etiquetas: ['Nota 10,5'] }],
        },
        cat: { resto: 'Aún no tenemos los centros presenciales de tu comunidad.' },
        val: { resto: 'Aún no tenemos los centros presenciales de tu comunidad.' },
        and: { resto: 'Aún no tenemos los centros presenciales de tu comunidad.' },
      },
    },
    {
      titulo: 'FP de Grado Superior',
      oficial: 'Informática (ASIR) + curso de especialización en Ciberseguridad',
      duracion: '2 años + unos 9 meses',
      meses: 33,
      icono: 'fp',
      frase: 'Haces un grado superior de Informática (ASIR) y después un curso de especialización en Ciberseguridad.',
      necesitas: BACH_FP,
      nota: NOTA_MEDIA,
      cuesta: PREGUNTA_CENTRO,
      depende: true,
      lugares: {
        val: { centros: [{ nombre: 'IES Antonio Sequeros', lugar: 'Almoradí (Alicante)', tipo: 'Pública', etiquetas: ['Semipresencial'] }] },
        cat: { cuesta: PUBLICO_360, resto: 'Aún no tenemos los centros de Cataluña.' },
      },
    },
    {
      titulo: 'Cursos',
      oficial: 'Cursos y certificaciones',
      duracion: 'Unos meses',
      meses: 6,
      icono: 'curso',
      frase: 'Haces cursos y certificaciones que duran unos meses. Muchos son online.',
      necesitas: { valor: 'Nada concreto', nota: 'Te piden demostrar lo que sabes' },
      nota: { valor: 'No hay', nota: 'Cuenta lo que sabes hacer' },
      cuesta: { valor: 'Depende del curso', nota: 'Hay opciones gratis y de pago' },
    },
    {
      titulo: 'Por tu cuenta',
      oficial: 'Retos gratis de hacking ético, como picoCTF o TryHackMe',
      duracion: 'A tu ritmo',
      meses: null,
      icono: 'solo',
      frase: 'Practicas con retos gratis de hacking ético, como picoCTF o TryHackMe, y aprendes a tu ritmo.',
      necesitas: { valor: 'Nada concreto', nota: 'Se aprende practicando' },
      nota: { valor: 'No hay', nota: 'Cuenta lo que sabes hacer' },
      cuesta: { valor: 'Gratis', nota: 'Hay webs con retos para empezar desde cero' },
    },
  ],
};

// ---------- Ayudas para pintar cada estado (se calculan al construir la página) ----------

const faltaDato = (e: Estado) => (e === '' ? TEXTOS.datoSinElegir : TEXTOS.datoSinDatos);
const lugarDe = (v: Via, e: Estado): Lugar | undefined => (e && e !== 'otra' ? v.lugares?.[e] : undefined);

// Nota para entrar y cuánto cuesta, según dónde vives
export function datosDe(v: Via, e: Estado): { nota: Dato; cuesta: Dato } {
  const l = lugarDe(v, e);
  return {
    nota: l?.nota ?? v.nota ?? { valor: 'Depende del centro', nota: faltaDato(e) },
    cuesta: l?.cuesta ?? v.cuesta ?? { valor: 'Depende del centro', nota: faltaDato(e) },
  };
}

export interface Donde {
  titulo?: string; // «Dónde, en Cataluña»
  aviso?: string; // texto suelto (sin comunidad, sin datos…)
  centros: Centro[];
  resto?: string;
  bueno?: string;
}

// Bloque «Dónde», según dónde vives. null = la vía no depende del lugar
export function dondeDe(v: Via, e: Estado): Donde | null {
  if (!v.depende) return null;
  if (e === '') return { aviso: TEXTOS.elige, centros: [] };
  if (e === 'otra') return { titulo: 'Dónde', aviso: TEXTOS.sinDatos, centros: v.centrosTodas ?? [] };
  const l = lugarDe(v, e);
  const centros = [...(l?.centros ?? []), ...(v.centrosTodas ?? [])];
  const nombre = COMUNIDADES.find((c) => c.id === e)?.dondeEn;
  if (!centros.length && !l?.resto) return { aviso: TEXTOS.sinDatos, centros: [], bueno: l?.bueno };
  return { titulo: `Dónde, en ${nombre}`, centros, resto: l?.resto, bueno: l?.bueno };
}
