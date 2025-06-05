
import React from 'react';
import { Home } from 'lucide-react';

const NoMatterSituation = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reasons = [
    "Avoiding Foreclosure",
    "Expensive Repairs", 
    "Fed Up Being A Landlord",
    "Selling An Inherited House",
    "Loss Of Income",
    "Elderly Moving To Assisted Living",
    "Job Relocation",
    "Other Reasons You May Have"
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-4">We Can Buy Your House</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            No Matter <span className="text-blue-600">The Situation!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your reasons for selling do not matter to us. The only thing we care about is solving your problem by buying 
            your house in cash as hassle-free as possible. No matter the reason, no matter the situation, we've seen it all, 
            we've conquered it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center space-x-3 p-4">
              <Home className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium text-lg">{reason}</span>
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

export default NoMatterSituation;
