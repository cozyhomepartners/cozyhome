
import React from 'react';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We have received your information and will get back to you shortly to schedule an appointment with a fair cash offer for your property.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-gray-700">We'll review your property information</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-gray-700">Schedule a convenient time for property walkthrough</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-gray-700">Present you with a fair, no-obligation cash offer</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">Need to reach us immediately?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(847) 809-3322" 
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Phone size={18} />
                <span>(847) 809-3322</span>
              </a>
              <a 
                href="mailto:charles@cozyhomepartners.com" 
                className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={18} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
