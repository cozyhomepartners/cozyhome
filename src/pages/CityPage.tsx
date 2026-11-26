import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MlsComparison from '../components/MlsComparison';
import HowToSell from '../components/HowToSell';
import WeBuyHouses from '../components/WeBuyHouses';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import NotFound from './NotFound';
import { useScrollRestoration } from '../hooks/useScrollRestoration';
import { cityBySlug, cityLabel } from '@/data/cities';
import { faqsFor, faqJsonLd } from '@/data/faqs';
import { breadcrumbJsonLd, businessJsonLd, cityServiceJsonLd } from '@/lib/schema';

const CityPage = () => {
  useScrollRestoration();
  const { slug } = useParams();
  const city = cityBySlug(slug);
  if (!city) return <NotFound />;

  const label = cityLabel(city);
  const path = `/we-buy-houses/${city.slug}`;
  const faqs = faqsFor(city.name);
  const nearby = city.nearby.map((s) => cityBySlug(s)).filter(Boolean);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`We Buy Houses ${label} | Sell Your House Fast for Cash`}
        description={`Sell your ${city.name}, ${city.stateName} house fast for cash. Cash offer in 24 hours, no repairs, no commissions, no closing costs. Close in as little as 7 days.`}
        path={path}
        jsonLd={[
          businessJsonLd(),
          cityServiceJsonLd(city),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Areas we serve', path: '/we-buy-houses' },
            { name: label, path },
          ]),
        ]}
      />
      <Header />
      <main>
        <nav aria-label="Breadcrumb" className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-4 text-sm text-ink-soft">
          <ol className="flex flex-wrap gap-1">
            <li><Link to="/" className="hover:text-ink">Home</Link> /</li>
            <li><Link to="/we-buy-houses" className="hover:text-ink">Areas we serve</Link> /</li>
            <li aria-current="page" className="text-ink">{label}</li>
          </ol>
        </nav>
        <Hero place={label} />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-ink mb-5">
              Cash home buyers in {label}
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-4">{city.local}</p>
            <p className="text-lg text-ink-soft leading-relaxed">
              We are local investors who buy houses directly from owners in {city.name} and the rest of{' '}
              {city.county}, {city.stateName}. There is no listing, no agent commission and no
              closing costs. Tell us about the property and you will have a fair, written cash offer
              within 24 hours, with no obligation to accept it.
            </p>
          </div>
        </section>

        <HowToSell />
        <MlsComparison />
        <WeBuyHouses />
        <FAQ faqs={faqs} heading={`Selling your house in ${label}: common questions`} />

        {nearby.length > 0 && (
          <section className="py-12 bg-surface">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-ink mb-4">We also buy houses near {city.name}</h2>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {nearby.map((n) => (
                  <li key={n!.slug}>
                    <Link to={`/we-buy-houses/${n!.slug}`} className="text-brand hover:underline font-medium">
                      {cityLabel(n!)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default CityPage;
