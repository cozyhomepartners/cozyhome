
import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    "Kansas City", "Overland Park", "Olathe", "Independence", "Lee's Summit",
    "Shawnee", "Blue Springs", "Lenexa", "Leawood", "Prairie Village",
    "Raytown", "Gladstone", "Liberty", "Belton"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin size={16} />
            <span>Serving Greater Kansas City Area</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Local Kansas City Real Estate Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve major cities in the Kansas City metropolitan area, 
            bringing local expertise and market knowledge to every neighborhood.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <CheckCircle className="text-green-600 mr-3" size={24} />
              Cities & Areas We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Don't see your area listed?
            </h3>
            <p className="text-gray-600 mb-4">
              We're expanding our service areas regularly. Contact us to discuss your location!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
