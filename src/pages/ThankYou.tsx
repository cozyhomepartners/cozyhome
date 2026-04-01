
import React from 'react';
import { CheckCircle, Home, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>

          {/* Response time promise */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock size={16} />
            <span>We'll contact you within 2 hours during business hours</span>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We've received your property information and a team member will reach out shortly with a fair, no-obligation cash offer.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-gray-700">We'll review your property details and research comparable sales</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-gray-700">A team member will contact you to schedule a walkthrough</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-gray-700">You'll receive a fair, no-obligation cash offer — close in as few as 7 days</p>
              </div>
            </div>
          </div>

          {/* Learn more about the process */}
          <div className="mb-8">
            <Link 
              to="/our-process"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>See Our Full Process</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">Need to reach us immediately?</p>
            <div className="flex justify-center">
              <a 
                href="mailto:offer@cozyhomepartners.com" 
                className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={18} />
                <span>offer@cozyhomepartners.com</span>
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
