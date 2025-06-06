
import React from 'react';
import Header from './Header';
import HeroFormSection from './HeroFormSection';
import HowToSell from './HowToSell';
import BenefitsOfSelling from './BenefitsOfSelling';
import WeBuyHouses from './WeBuyHouses';
import NoMatterSituation from './NoMatterSituation';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { Star, MapPin } from 'lucide-react';

interface CountyLandingPageProps {
  countyName: string;
  state: string;
  mapImage: string;
  cities: string[];
}

const CountyLandingPage = ({ countyName, state, mapImage, cities }: CountyLandingPageProps) => {
  const countySlug = countyName.toLowerCase().replace(' ', '-') + '-' + state.toLowerCase();
  const canonicalUrl = `https://cozyhomepartners.com/${countySlug}`;
  
  return (
    <div className="min-h-screen">
      <SEOHead
        title={`We Buy Houses in ${countyName}, ${state} - Fast Cash Home Buyers | Cozy Home Partners`}
        description={`We buy houses in ${countyName}, ${state} for cash! Get a fair offer in 24 hours. No fees, no repairs needed. Trusted cash home buyers serving ${countyName}.`}
        keywords={`we buy houses, cash home buyers, sell house fast, ${countyName}, ${state}, real estate, home buyers`}
        canonicalUrl={canonicalUrl}
        ogImage={mapImage}
        countyName={countyName}
        state={state}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star size={16} className="text-blue-600" />
                <span>Trusted {countyName} Real Estate Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Buy Houses in
                <span className="text-blue-600 block">{countyName}</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Looking to sell your house fast in <span className="text-blue-600 font-semibold">{countyName}</span>? 
                We are trusted cash home buyers in <span className="text-blue-600 font-semibold">{countyName}</span> offering 
                hassle-free sales with no fees or closing costs.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-600">Counties Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - County Map */}
            <div className="relative">
              <img 
                src={mapImage}
                alt={`${countyName} Map`}
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Just Sold!</div>
                    <div className="text-gray-600 text-sm">{countyName}, {state}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroFormSection />
      <HowToSell />
      <BenefitsOfSelling />
      <WeBuyHouses />
      <NoMatterSituation />
      
      {/* County-specific Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin size={16} />
              Serving {countyName}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cities We Cover in {countyName}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly serving families across {countyName}, {state} with personalized options.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cities & Areas We Serve in {countyName}</h3>
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
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CountyLandingPage;
