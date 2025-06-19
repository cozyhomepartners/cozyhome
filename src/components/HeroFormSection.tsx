
import React from 'react';
import HeroContactForm from './HeroContactForm';

const HeroFormSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Cash Offer Today
            </h2>
            <p className="text-xl text-gray-600">
              Cash home buyers serving Liberty MO, Raytown, Lenexa KS, Olathe KS, Shawnee KS, and Prairie Village KS. 
              We buy houses for cash with fair, no-obligation offers.
            </p>
          </div>
          <HeroContactForm />
        </div>
      </div>
    </section>
  );
};

export default HeroFormSection;
