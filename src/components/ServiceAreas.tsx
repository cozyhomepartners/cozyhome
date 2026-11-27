import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Check } from 'lucide-react';
import { CITIES, cityLabel } from '@/data/cities';

const ServiceAreas = () => {
  const counties = [
    "Jackson County, MO", "Clay County, MO", "Platte County, MO",
    "Cass County, MO", "Johnson County, KS", "Wyandotte County, KS"
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="service-areas-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-soft text-brand px-4 py-2 rounded-full text-base font-semibold mb-6">
            <MapPin size={18} aria-hidden="true" />
            Serving the greater Kansas City area
          </div>
          <h2 id="service-areas-heading" className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Where We Buy Houses
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            We buy houses for cash across the Kansas City metro, on both sides of the state line.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-bold text-ink mb-4">Counties</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {counties.map((county) => (
                <li key={county} className="flex items-center gap-2.5">
                  <Check size={20} className="text-success flex-shrink-0" aria-hidden="true" />
                  <span className="text-ink font-medium text-lg">{county}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-bold text-ink mb-4">Cities</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/we-buy-houses/${city.slug}`}
                    className="text-brand hover:text-brand-dark underline-offset-4 hover:underline font-medium"
                  >
                    {cityLabel(city)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
