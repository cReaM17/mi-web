import { SITIO, SERVICIOS, LEGAL } from '../data/sitio';

/** Datos estructurados del profesional (Person) y su actividad (ProfessionalService). */
export function personaJsonLd(site: URL): Record<string, unknown>[] {
  const url = site.href;
  const personaId = new URL('/#persona', site).href;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': personaId,
      name: SITIO.nombre,
      jobTitle: SITIO.profesion,
      email: `mailto:${SITIO.email}`,
      telephone: '+34614128169',
      url,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Pontificia Comillas (ICAI)',
      },
      memberOf: LEGAL.colegios.map((c) => ({
        '@type': 'Organization',
        name: c.nombre,
        url: c.url,
      })),
      ...(SITIO.redes.length ? { sameAs: SITIO.redes.map((r) => r.url) } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': new URL('/#servicio', site).href,
      name: `${SITIO.marca} · ${SITIO.nombre}, ${SITIO.profesion}`,
      url,
      email: SITIO.email,
      telephone: '+34614128169',
      image: new URL('/og-default.png', site).href,
      founder: { '@id': personaId },
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITIO.ciudad,
        addressRegion: 'Comunidad de Madrid',
        addressCountry: 'ES',
      },
      areaServed: SITIO.zonaLista.map((z) => ({ '@type': 'AdministrativeArea', name: z })),
      knowsLanguage: 'es',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios',
        itemListElement: SERVICIOS.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.titulo, description: s.texto },
        })),
      },
    },
  ];
}
