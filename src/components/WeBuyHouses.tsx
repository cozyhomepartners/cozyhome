
import React from 'react';
import { Home, Wrench, Gavel, MapPin, Users, Truck, DollarSign, User } from 'lucide-react';

const WeBuyHouses = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const situations = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Too Many Repairs",
      description: "Received a renovation quote to get your house fixed and can't afford the costs?"
    },
    {
      icon: <Gavel className="w-12 h-12 text-blue-600" />,
      title: "Stop Foreclosure",
      description: "In default on your mortgage or taxes, and the house is scheduled for auction?"
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Inherited A Property",
      description: "Inherited property and need to sell it before probate is complete?"
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Moving Out Of State",
      description: "Need to relocate for work or retirement and need a quick seamless sale?"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Divorce",
      description: "You won't have to fix or clean anything! We will buy your home the way it is."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Tired Landlord",
      description: "Sick of being a landlord and renting to tenants who trash your home and don't pay rent when it's due?"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Loss Of Income",
      description: "Lost your job or had a reduction in income and can no longer afford your mortgage payments?"
    },
    {
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: "Elderly Moving To Assisted Living",
      description: "Need to transition to assisted living and sell your home quickly for the move?"
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Other Reasons You May Have",
      description: "Whatever your unique situation, we understand and are here to help with a fast cash sale."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We Can Buy Your House No Matter <span className="text-blue-600">The Situation!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Your reasons for selling do not matter to us. The only thing we care about is solving your problem by buying 
            your house in cash as hassle-free as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {situations.map((situation, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                {situation.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {situation.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {situation.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
          >
            GET MY CASH OFFER
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeBuyHouses;
