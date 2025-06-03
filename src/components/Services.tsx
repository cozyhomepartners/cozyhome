
import React from 'react';
import { Home, Search, DollarSign, Users, Award, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Buying",
      description: "Expert guidance through every step of purchasing your dream home in Kansas City."
    },
    {
      icon: Search,
      title: "Home Selling", 
      description: "Strategic marketing and pricing to sell your home quickly and for top dollar."
    },
    {
      icon: DollarSign,
      title: "Market Analysis",
      description: "Comprehensive market insights to help you make informed real estate decisions."
    },
    {
      icon: Users,
      title: "First-Time Buyers",
      description: "Specialized support for first-time homebuyers navigating the Kansas City market."
    },
    {
      icon: Award,
      title: "Investment Properties",
      description: "Identify profitable investment opportunities across Kansas City metro area."
    },
    {
      icon: Clock,
      title: "Relocation Services",
      description: "Seamless relocation assistance for families moving to Kansas City area."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From buying your first home to selling luxury properties, we provide 
            expert real estate services tailored to your unique needs across Kansas City.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon size={32} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
