/**
 * Textos y datos generales de la web.
 * Fuente: material/contenido-web.md. Para cambiar un texto, edítalo aquí.
 * Lo que aparece como [PENDIENTE: ...] se muestra resaltado en la web hasta que se complete.
 */
import type { Categoria } from './categorias-nombres';

export const SITIO = {
  marca: 'DCM',
  nombre: 'David Clemente Martín',
  profesion: 'Ingeniero de Telecomunicación',
  email: 'dcmtecnico17@gmail.com',
  telefono: '614 128 169',
  telefonoEnlace: 'tel:+34614128169',
  ciudad: 'Madrid',
  zona: 'Comunidad de Madrid, Castilla y León y Castilla-La Mancha',
  zonaLista: ['Comunidad de Madrid', 'Castilla y León', 'Castilla-La Mancha'],
  colegiacion: {
    coitt: '16.980',
    coit: 'C21748',
  },
  /**
   * Redes sociales. Añade objetos { nombre, url } cuando tengas las URL exactas.
   * Ejemplo: { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-perfil/' }
   */
  redes: [] as { nombre: string; url: string }[],
  linkedinPendiente: '[PENDIENTE: URL exacta del perfil de LinkedIn]',
};

export const PORTADA = {
  titular: 'Proyectos eléctricos y de telecomunicaciones, del cálculo al visado.',
  subtitulo:
    'Baja y media tensión, ICT, fotovoltaica, licencias de actividad y eficiencia energética para particulares, comercios, hostelería, naves e instaladores en Madrid, Castilla y León y Castilla-La Mancha.',
  confianza: [
    'Ingeniero colegiado · COITT n.º 16.980 y COIT',
    'Proyectos visados y verificados por el COITT',
    'Formado en ICAI · Universidad Pontificia Comillas',
    'Expedientes de nuevo suministro con i-DE',
  ],
};

export const LLAMADA = {
  titulo: '¿Tienes un proyecto entre manos?',
  texto: 'Cuéntame qué necesitas y te digo cómo lo resolvemos y cuánto cuesta.',
  boton: 'Pide presupuesto',
  corta: '¿Tienes algo parecido? Hablemos.',
};

export const PUBLICO =
  'Particulares, comercios y hostelería, naves industriales e instaladores.';

export const SOBRE_MI = [
  'Soy David Clemente Martín, ingeniero de Telecomunicación por ICAI (Universidad Pontificia Comillas) y colegiado en el COITT (n.º 16.980) y en el COIT. Desde 2023 trabajo como autónomo redactando y visando proyectos de baja tensión, infraestructuras comunes de telecomunicación (ICT), licencias de actividad y certificados de eficiencia energética.',
  'Antes de establecerme por mi cuenta trabajé en Iberdrola, en calidad del negocio de distribución eléctrica y en analítica de datos, y fui controlador de tránsito aéreo en ENAIRE. De esas etapas me traigo dos cosas: sé cómo trabaja una distribuidora por dentro y sé que un procedimiento bien hecho evita sorpresas.',
  'Trabajo con particulares, comercios, hostelería, naves industriales e instaladores en la Comunidad de Madrid, Castilla y León y Castilla-La Mancha. Me encargo del proyecto y de su tramitación con el colegio, la distribuidora y el ayuntamiento, y te explico cada paso con claridad.',
];

export const FORMACION = [
  'Grado en Ingeniería de Tecnologías de Telecomunicación — Universidad Pontificia Comillas (ICAI)',
  'Máster en Ingeniería de Telecomunicación (habilitante) — Universidad Pontificia Comillas (ICAI)',
];

export interface Servicio {
  id: string;
  titulo: string;
  /** Categoría de proyectos relacionada (y su ilustración). */
  categoria: Categoria;
  texto: string;
  paraQuien: string;
}

export const SERVICIOS: Servicio[] = [
  {
    id: 'baja-tension',
    titulo: 'Instalaciones de baja tensión',
    categoria: 'Baja Tensión',
    texto:
      'Proyectos, memorias técnicas y visado de instalaciones eléctricas para viviendas, edificios, naves y locales de pública concurrencia. Incluye ampliaciones de red y nuevos suministros con la distribuidora, y estudios de desclasificación de garajes.',
    paraQuien: 'Particulares, comercios y hostelería, naves industriales e instaladores.',
  },
  {
    id: 'media-tension',
    titulo: 'Media tensión y centros de transformación',
    categoria: 'Media Tensión',
    texto:
      'Proyectos de líneas de media tensión y centros de transformación para suministros que la red de baja tensión no puede atender. Tramito el expediente con la distribuidora desde la solicitud de nuevo suministro.',
    paraQuien: 'Naves industriales, instaladores y promociones con varios suministros.',
  },
  {
    id: 'fotovoltaica',
    titulo: 'Energía solar fotovoltaica',
    categoria: 'Fotovoltaica',
    texto:
      'Proyectos y memorias técnicas de instalaciones de autoconsumo, con o sin excedentes, listos para legalizar y conectar. La instalación se dimensiona según tu consumo y el espacio disponible.',
    paraQuien: 'Particulares, comercios, naves industriales e instaladores.',
  },
  {
    id: 'ict',
    titulo: 'Infraestructuras Comunes de Telecomunicación (ICT)',
    categoria: 'ICT',
    texto:
      'Proyectos de ICT según el Real Decreto 346/2011, diseñados con CYPE, para edificios de viviendas y locales. Cubren radio y televisión terrestre y por satélite, telefonía y banda ancha, con fibra óptica hasta cada vivienda.',
    paraQuien: 'Promotores, edificios de viviendas e instaladores de telecomunicaciones.',
  },
  {
    id: 'licencias',
    titulo: 'Licencias de actividad y apertura',
    categoria: 'Licencias',
    texto:
      'Proyecto técnico y gestión de la licencia o declaración responsable para abrir o reformar tu negocio. Tengo experiencia con supermercados, hostales y bares.',
    paraQuien: 'Comercios y hostelería.',
  },
  {
    id: 'eficiencia-energetica',
    titulo: 'Eficiencia energética',
    categoria: 'Eficiencia Energética',
    texto:
      'Certificados de eficiencia energética para vender o alquilar viviendas, locales y oficinas. Auditorías energéticas para saber dónde se pierde energía y qué mejoras compensan.',
    paraQuien: 'Particulares, comercios y empresas.',
  },
];

/** Títulos SEO y meta descripciones por página (material, sección 7). */
export const SEO = {
  inicio: {
    titulo: 'Proyectos eléctricos, ICT y licencias en Madrid | DCM',
    descripcion:
      'Ingeniero colegiado: proyectos de baja y media tensión, ICT, fotovoltaica, licencias de actividad y certificados energéticos en Madrid y alrededores.',
  },
  servicios: {
    titulo: 'Baja y media tensión, ICT y fotovoltaica | DCM',
    descripcion:
      'Proyectos y visado de baja y media tensión, centros de transformación, fotovoltaica, ICT, licencias de actividad y eficiencia energética.',
  },
  proyectos: {
    titulo: 'Proyectos de electricidad e ICT en Madrid | DCM',
    descripcion:
      'Casos reales de baja y media tensión, ICT y garajes en Madrid, con su reto, su solución y su resultado. Proyectos visados por el COITT.',
  },
  sobreMi: {
    titulo: 'David Clemente Martín, ingeniero colegiado | DCM',
    descripcion:
      'Ingeniero de Telecomunicación por ICAI, colegiado en el COITT y el COIT. Proyectos eléctricos y de telecomunicaciones desde 2023.',
  },
  contacto: {
    titulo: 'Pide presupuesto para tu proyecto | DCM',
    descripcion:
      'Cuéntame tu proyecto eléctrico, de ICT o de licencia de actividad. Trabajo en Madrid, Castilla y León y Castilla-La Mancha. Tel. 614 128 169.',
  },
  avisoLegal: {
    titulo: 'Aviso legal | DCM',
    descripcion:
      'Datos identificativos del titular de esta web y condiciones de uso, conforme al artículo 10 de la LSSI-CE.',
  },
  privacidad: {
    titulo: 'Política de privacidad | DCM',
    descripcion:
      'Cómo se tratan los datos que envías por el formulario de contacto y cómo ejercer tus derechos según el RGPD.',
  },
};

export const LEGAL = {
  titular: 'David Clemente Martín, profesional autónomo',
  nif: '[PENDIENTE: NIF]',
  domicilio:
    '[PENDIENTE: confirmar domicilio profesional. En sus proyectos figura C/ Fernández de la Hoz 58, 28010 Madrid]',
  colegios: [
    {
      nombre: 'Colegio Oficial de Ingenieros Técnicos de Telecomunicación (COITT)',
      numero: '16.980',
      url: 'https://www.coitt.es/',
    },
    {
      nombre: 'Colegio Oficial de Ingenieros de Telecomunicación (COIT)',
      numero: 'C21748',
      url: 'https://www.coit.es/',
    },
  ],
  titulos: FORMACION,
};
