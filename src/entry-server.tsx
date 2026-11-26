// Used only at build time to pre-render every public route to static HTML,
// so search engines and social previews see full content without running JS.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import type { HelmetServerState } from 'react-helmet-async';
import App from './App';
import { CITIES } from './data/cities';

export interface PrerenderRoute {
  path: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Excluded from sitemap.xml (still pre-rendered). */
  hidden?: boolean;
}

export const routes: PrerenderRoute[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/our-process', changefreq: 'monthly', priority: 0.8 },
  { path: '/we-buy-houses', changefreq: 'monthly', priority: 0.9 },
  ...CITIES.map((c) => ({ path: `/we-buy-houses/${c.slug}`, changefreq: 'monthly' as const, priority: 0.8 })),
  { path: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
  { path: '/thank-you', changefreq: 'yearly', priority: 0, hidden: true },
  { path: '/404', changefreq: 'yearly', priority: 0, hidden: true },
];

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const Router = ({ children }: { children: React.ReactNode }) => (
    <StaticRouter location={url}>{children}</StaticRouter>
  );
  const html = renderToString(<App router={Router} helmetContext={helmetContext} />);
  const h = helmetContext.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join('\n    ');
  return { html, head };
}
