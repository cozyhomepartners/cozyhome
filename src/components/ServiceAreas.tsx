import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    "Kansas City", "Overland Park", "Olathe", "Independence",
    "Lee's Summit", "Shawnee", "Blue Springs", "Lenexa",
    "Leawood", "Prairie Village", "Raytown", "Gladstone",
    "Liberty", "Belton"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin size={16} />
            Serving Greater Kansas City Area
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Cities We Cover
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly serving families across the greater Kansas City metropolitan area with personalized options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cities & Areas We Serve</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm">{city}</span>
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
