
import React from 'react';
import HeroContactForm from './HeroContactForm';

const HeroFormSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Cash Offer Today
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll provide you with a fair, no-obligation cash offer for your Kansas City home.
            </p>
          </div>
          <HeroContactForm />
        </div>
      </div>
    </section>
  );
};

export default HeroFormSection;
