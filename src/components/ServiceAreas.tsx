
import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    "Kansas City", "Independence", "Lee's Summit", "Blue Springs",
    "Raytown", "Liberty", "Gladstone", "North Kansas City",
    "Belton", "Raymore"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Local Kansas City Real Estate Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly serving families across the greater Kansas City metropolitan area with personalized real estate solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
