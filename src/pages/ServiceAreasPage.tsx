import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useScrollRestoration } from '../hooks/useScrollRestoration';
import { CITIES, cityLabel } from '@/data/cities';
import { breadcrumbJsonLd, businessJsonLd } from '@/lib/schema';

const STATES = [
  { code: 'MO', name: 'Missouri' },
  { code: 'KS', name: 'Kansas' },
] as const;

const ServiceAreasPage = () => {
  useScrollRestoration();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Areas We Serve | We Buy Houses Across Kansas City MO & KS"
        description="Cozy Home Partners buys houses for cash across the Kansas City metro: Overland Park, Olathe, Lenexa, Shawnee, Independence, Lee's Summit, Liberty and more."
        path="/we-buy-houses"
        jsonLd={[businessJsonLd(), breadcrumbJsonLd([{ name: 'Areas we serve', path: '/we-buy-houses' }])]}
      />
      <Header />
      <main>
        <section className="bg-gradient-to-br from-brand-soft to-white py-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-5">
              We buy houses across the Kansas City metro
            </h1>
            <p className="text-xl text-ink-soft leading-relaxed">
              Missouri or Kansas, city or suburb, any condition. Pick your city to see how a
              direct cash sale works there.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-10">
            {STATES.map((st) => (
              <div key={st.code}>
                <h2 className="text-2xl font-bold text-ink mb-4">{st.name}</h2>
                <ul className="space-y-3">
                  {CITIES.filter((c) => c.state === st.code).map((c) => (
                    <li key={c.slug}>
                      <Link to={`/we-buy-houses/${c.slug}`} className="text-lg text-brand hover:underline font-medium">
                        We buy houses in {cityLabel(c)}
                      </Link>
                      <span className="block text-ink-soft text-sm">{c.county}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreasPage;
