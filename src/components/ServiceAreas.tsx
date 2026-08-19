import React from 'react';
import { MapPin, Check } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    "Kansas City", "Overland Park", "Olathe", "Independence",
    "Lee's Summit", "Shawnee", "Blue Springs", "Lenexa",
    "Leawood", "Prairie Village", "Raytown", "Gladstone",
    "Liberty", "Belton"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-soft text-brand px-4 py-2 rounded-full text-base font-semibold mb-6">
            <MapPin size={18} />
            Serving the greater Kansas City area
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            The Cities We Cover
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            We buy houses across the Kansas City metro on both sides of the state line.
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
  );
};

export default ServiceAreas;
