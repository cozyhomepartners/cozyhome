import React from 'react';
import Header from './Header';
import HeroContactForm from './HeroContactForm';
import MlsComparison from './MlsComparison';
import HowToSell from './HowToSell';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { useScrollRestoration } from '../hooks/useScrollRestoration';
import { Star, MapPin, CheckCircle, Check } from 'lucide-react';

interface CountyLandingPageProps {
  countyName: string;
  state: string;
  mapImage: string;
  cities: string[];
}

const CountyLandingPage = ({ countyName, state, mapImage, cities }: CountyLandingPageProps) => {
  useScrollRestoration();

  const getCanonicalUrl = (county: string, st: string) => {
    const countySlug = county.toLowerCase().replace(' county', '').replace(' ', '') + '-county-' + st.toLowerCase();
    return `https://www.cozyhomepartners.com/${countySlug}`;
  };

  const canonicalUrl = getCanonicalUrl(countyName, state);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`We Buy Houses in ${countyName}, ${state} | Cozy Home Partners`}
        description={`We buy houses in ${countyName}, ${state} for cash! Get a fair offer in 24 hours. No fees, no repairs needed. Trusted cash home buyers serving ${countyName}.`}
        keywords={`we buy houses, cash home buyers, sell house fast, ${countyName}, ${state}, real estate, home buyers`}
        canonicalUrl={canonicalUrl}
        ogImage={mapImage}
        countyName={countyName}
        state={state}
      />

      <Header />

      {/* Hero with form */}
      <section className="relative bg-gradient-to-br from-brand-soft via-white to-surface-alt py-14 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 bg-white border border-brand/20 text-brand px-4 py-2 rounded-full text-base font-semibold">
                <Star size={18} className="text-clay" />
                <span>Local cash buyers in {countyName}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-ink">
                Sell your house in{' '}
                <span className="text-brand">{countyName}</span> without listing it
              </h1>

              <p className="text-xl text-ink-soft leading-relaxed">
                No MLS listing, no repairs, no open houses. Tell us about your{' '}
                {countyName} property and get a fair cash offer within 24 hours —
                you choose the closing date.
              </p>

              <ul className="space-y-3">
                {[
                  'One private visit — never a public showing',
                  'Zero commission, and we pay all closing costs',
                  `Close in as little as 7 days anywhere in ${countyName}`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-ink">
                    <CheckCircle size={22} className="text-success flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-ink font-serif">24 hrs</div>
                  <div className="text-ink-soft text-base">To your offer</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ink font-serif">7 days</div>
                  <div className="text-ink-soft text-base">Possible closing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ink font-serif">$0</div>
                  <div className="text-ink-soft text-base">Fees or commission</div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <MlsComparison />
      <HowToSell />

      {/* County-specific Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-soft text-brand px-4 py-2 rounded-full text-base font-semibold mb-6">
              <MapPin size={18} />
              Serving {countyName}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
              Cities We Cover in {countyName}
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">
              We buy houses in every community across {countyName}, {state}.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2.5">
                    <Check size={20} className="text-success flex-shrink-0" />
                    <span className="text-ink font-medium text-lg">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default CountyLandingPage;
