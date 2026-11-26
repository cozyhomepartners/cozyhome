import { SITE, absoluteUrl } from './site';
import { CITIES, cityLabel, type City } from '@/data/cities';

const BUSINESS_ID = `${SITE.url}/#business`;

export const businessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: SITE.name,
  description:
    'Local cash home buyers in the Kansas City metro. We buy houses as-is with no commissions, no repairs and no closing costs, and close in as little as 7 days.',
  url: SITE.url,
  logo: SITE.logo,
  image: SITE.ogImage,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', ...SITE.geo },
  areaServed: [
    ...['Jackson County, MO', 'Clay County, MO', 'Platte County, MO', 'Cass County, MO', 'Johnson County, KS', 'Wyandotte County, KS'].map(
      (name) => ({ '@type': 'AdministrativeArea', name }),
    ),
    ...CITIES.map((c) => ({ '@type': 'City', name: cityLabel(c) })),
  ],
  knowsAbout: ['Cash home buying', 'Selling a house as-is', 'Inherited property', 'Foreclosure', 'Probate real estate'],
});

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': BUSINESS_ID },
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const cityServiceJsonLd = (city: City) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `We buy houses for cash in ${cityLabel(city)}`,
  serviceType: 'Cash home buying',
  provider: { '@id': BUSINESS_ID },
  areaServed: {
    '@type': 'City',
    name: cityLabel(city),
    containedInPlace: { '@type': 'AdministrativeArea', name: `${city.county}, ${city.state}` },
  },
  url: absoluteUrl(`/we-buy-houses/${city.slug}`),
});
