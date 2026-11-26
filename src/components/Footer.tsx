import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '@/lib/site';
import { CITIES, cityLabel } from '@/data/cities';

const Footer = () => {
  return (
    <footer className="bg-surface-alt text-ink">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
        <nav aria-label="Areas we serve" className="mb-6">
          <p className="text-sm font-semibold text-ink mb-2">We buy houses in</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/we-buy-houses/${c.slug}`} className="text-ink-soft hover:text-ink text-sm transition-colors">
                  {cityLabel(c)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border pt-5">
          <p className="text-ink-soft text-sm">
            © {new Date().getFullYear()} {SITE.name} · Cash home buyers in Kansas City, MO &amp; KS ·{' '}
            <a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a>
          </p>
          <div className="flex space-x-6">
            <Link to="/our-process" className="text-ink-soft hover:text-ink text-sm transition-colors">Our Process</Link>
            <Link to="/privacy-policy" className="text-ink-soft hover:text-ink text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-ink-soft hover:text-ink text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
