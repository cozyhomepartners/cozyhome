// Single source of truth for business details used in meta tags, structured
// data and visible copy. Keep the name, phone and email identical everywhere
// (NAP consistency is a local-SEO ranking factor).
export const SITE = {
  name: 'Cozy Home Partners',
  url: 'https://www.cozyhomepartners.com',
  phone: '+1-847-809-3322',
  email: 'offer@cozyhomepartners.com',
  logo: 'https://www.cozyhomepartners.com/icon-512.png',
  ogImage: 'https://www.cozyhomepartners.com/og-image.jpg',
  locality: 'Kansas City',
  region: 'MO',
  // Approximate center of the KC metro, used for geo meta + schema.
  geo: { latitude: 39.0997, longitude: -94.5786 },
} as const;

export const absoluteUrl = (path: string) =>
  `${SITE.url}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
