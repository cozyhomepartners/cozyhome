import React from 'react';
import { Clock, Users, DollarSign, Wrench } from 'lucide-react';

const BenefitsOfSelling = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <Clock className="w-16 h-16 text-blue-600" />,
      title: "Cash Offer Within 24 Hours",
      description: "Tell us about your house, then we'll carefully evaluate it with local market expertise and provide you with a fair, no-obligation offer."
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: "No Showings – No Hassles",
      description: "We buy houses \"as-is,\" so there are no open houses, no weekend showings, and no need to fix it up first."
    },
    {
      icon: <DollarSign className="w-16 h-16 text-blue-600" />,
      title: "No Closing Costs",
      description: "We charge no fees, no commissions, and we pay ALL closing costs."
    },
    {
      icon: <Wrench className="w-16 h-16 text-blue-600" />,
      title: "We Cover Repairs",
      description: "Does your house needs repairs? We'll handle them. You're not on the hook."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            4 <span className="text-blue-600 underline">Benefits Of Selling</span> Directly To Cozy Home Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'll make you a fair cash offer so you can sell without the hassles and stress of listing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
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

export default BenefitsOfSelling;
