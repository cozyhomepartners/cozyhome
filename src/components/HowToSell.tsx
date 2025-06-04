
import React from 'react';
import { Home, Calendar, DollarSign } from 'lucide-react';

const HowToSell = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How To Sell Your <span className="text-blue-600">House Quickly</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Selling your house for cash could not be easier. Blue Land Homes eliminate the need for official inspections or third 
            party approvals making the entire selling process hassle-free with the ability to close on your schedule. No delays, no 
            open houses, no walkthroughs, no uncertainties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Step 01
              </div>
            </div>
            <div className="mt-8 mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Home size={32} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h3>
            <p className="text-gray-600 leading-relaxed">
              Fill the form and share some information about the property. Then, we will 
              schedule a walkthrough.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Step 02
              </div>
            </div>
            <div className="mt-8 mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar size={32} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointment</h3>
            <p className="text-gray-600 leading-relaxed">
              Pick an appointment date, we'll make a fair, no-obligation, cash offer for your 
              house in its current condition.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Step 03
              </div>
            </div>
            <div className="mt-8 mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <DollarSign size={32} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Offer</h3>
            <p className="text-gray-600 leading-relaxed">
              We offer the ability to close on your sale quickly on a schedule that works for you.
            </p>
          </div>
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

export default HowToSell;
