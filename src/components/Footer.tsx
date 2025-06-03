
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">C</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Cozy Home Partners</h3>
                <p className="text-gray-400">Kansas City Real Estate</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted Kansas City real estate partner, helping families find their perfect homes 
              across all counties in the metro area. Local expertise, personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">(816) 555-0123</p>
                  <p className="text-gray-400 text-sm">Call or text anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">charles@cozyhomepartners.com</p>
                  <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Kansas City Metro Area</p>
                  <p className="text-gray-400 text-sm">All surrounding counties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Buying</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Selling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">First-Time Buyers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investment Properties</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Relocation Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Cozy Home Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
