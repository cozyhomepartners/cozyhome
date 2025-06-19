
import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star size={16} className="text-blue-600" />
              <span>Trusted Cash Home Buyers Kansas City Metro</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Buy Houses for Cash in
              <span className="text-blue-600 block">Kansas City</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Cash home buyers serving <span className="text-blue-600 font-semibold">Kansas City</span>, <span className="text-blue-600 font-semibold">Liberty</span>, <span className="text-blue-600 font-semibold">Blue Springs</span>, <span className="text-blue-600 font-semibold">Lee Summit</span>, <span className="text-blue-600 font-semibold">Raytown</span>, <span className="text-blue-600 font-semibold">Lenexa</span>, <span className="text-blue-600 font-semibold">Olathe</span>, <span className="text-blue-600 font-semibold">Shawnee</span>, and <span className="text-blue-600 font-semibold">Prairie Village</span>. We buy houses for cash in KC and surrounding areas with no fees or closing costs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Homes Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">6+</div>
                <div className="text-gray-600">Counties Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=600" 
              alt="We buy houses for cash in Kansas City, Liberty, Blue Springs, Lee Summit, Raytown, Lenexa, Olathe, Shawnee, Prairie Village" 
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
                  <div className="text-gray-600 text-sm">Lenexa, KS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
