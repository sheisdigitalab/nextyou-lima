// Ajustes globales de la web. Lo que cambia a menudo vive aquí.

export const SITIO = {
  nombre: 'NextYou',
  // PENDIENTE: dominio definitivo. Se usa para las URL absolutas de Open Graph.
  url: 'https://nextyou.example',
  titulo: 'Test gratis: descubre qué estudiar y a qué dedicarte · NextYou',
  descripcion:
    '¿No sabes qué estudiar? Test gratis de 8 minutos y sin crear cuenta: tres caminos para explorar y vídeos de gente que ya trabaja en ellos.',
};

// Pide a los buscadores que no indexen la web mientras sea una vista previa.
// Poner a false al publicar en el dominio definitivo.
export const NO_INDEXAR = true;

// Ruta base de la web ("/" en el dominio definitivo). Para enlaces internos.
export const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/?$/, '/');

// Destino del botón principal. Todos los botones de "Empezar" leen de aquí.
// Lleva a la página «Antes de empezar» (nombre y correo), que después abrirá el test.
export const CTA_PRINCIPAL = {
  href: `${BASE}empezar/`,
};

// Enlaces internos. Las que llevan '#' aún no existen: cuando existan, cambiar el href aquí.
export const ENLACES = {
  historias: '#', // PENDIENTE: página fase posterior (/historias)
  profesiones: '#', // PENDIENTE: página fase posterior (/profesiones)
  familias: `${BASE}familias/`,
  acompanamiento: `${BASE}acompanamiento/`,
  universidad: '#', // PENDIENTE: página fase posterior (/universidad, recorrido «Giro de Rumbo»)
  sara: '#', // PENDIENTE: página fase posterior (/sara)
  // Textos legales: página /legal/ con una sección por tema. PENDIENTE CLIENTA: texto definitivo.
  privacidad: `${BASE}legal/#privacidad`,
  avisoLegal: `${BASE}legal/#aviso-legal`,
  cookies: `${BASE}legal/#cookies`,
  menores: `${BASE}legal/#menores`,
};

// Versión 4 · presentación.
// Barra de paletas: solo para enseñar opciones a la clienta. Poner a false antes de publicar
// y se quita la barra; la web queda con la paleta Lima.
export const MOSTRAR_PALETAS_V4 = false;
// Lista de espera: el formulario está preparado pero oculto.
// PENDIENTE CLIENTA: activar lista de espera (destino de los datos, textos legales, baja).
export const LISTA_ESPERA_V4 = false;
