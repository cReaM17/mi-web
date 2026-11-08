import type { ImageMetadata } from 'astro';
import bajaTension from '../assets/ilustraciones/baja-tension.svg';
import mediaTension from '../assets/ilustraciones/media-tension.svg';
import ict from '../assets/ilustraciones/ict.svg';
import fotovoltaica from '../assets/ilustraciones/fotovoltaica.svg';
import licencias from '../assets/ilustraciones/licencias.svg';
import eficiencia from '../assets/ilustraciones/eficiencia-energetica.svg';

import { CATEGORIAS, type Categoria } from './categorias-nombres';

export { CATEGORIAS, type Categoria };

/** Datos de cada categoría: su ilustración se usa como imagen mientras no haya fotos reales. */
export const INFO_CATEGORIA: Record<
  Categoria,
  { slug: string; ilustracion: ImageMetadata; altIlustracion: string }
> = {
  'Baja Tensión': {
    slug: 'baja-tension',
    ilustracion: bajaTension,
    altIlustracion:
      'Ilustración de baja tensión: esquema unifilar con un embarrado del que salen varios circuitos protegidos.',
  },
  'Media Tensión': {
    slug: 'media-tension',
    ilustracion: mediaTension,
    altIlustracion:
      'Ilustración de media tensión: apoyo de línea eléctrica con aisladores y un centro de transformación.',
  },
  ICT: {
    slug: 'ict',
    ilustracion: ict,
    altIlustracion:
      'Ilustración de ICT: edificio con antenas en la cubierta y la red de telecomunicaciones llegando a cada planta.',
  },
  Fotovoltaica: {
    slug: 'fotovoltaica',
    ilustracion: fotovoltaica,
    altIlustracion:
      'Ilustración de fotovoltaica: sol y paneles solares conectados a un inversor.',
  },
  Licencias: {
    slug: 'licencias',
    ilustracion: licencias,
    altIlustracion:
      'Ilustración de licencias: documento técnico con un sello de aprobación junto al plano de un local.',
  },
  'Eficiencia Energética': {
    slug: 'eficiencia-energetica',
    ilustracion: eficiencia,
    altIlustracion:
      'Ilustración de eficiencia energética: escala de calificación por letras junto a una vivienda.',
  },
};
