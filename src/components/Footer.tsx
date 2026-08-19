
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-alt text-ink">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-ink">Cozy Home Partners</h3>
            <p className="text-ink-soft mb-4">Kansas City Cash Home Buyers</p>
            <p className="text-ink-soft mb-6 max-w-md">
              We buy houses for cash across the Kansas City metro area. 
              Fast closings, fair offers, zero hassle.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-soft mt-1" />
                <div>
                  <p className="font-medium text-ink">offer@cozyhomepartners.com</p>
                  <p className="text-ink-soft text-sm">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-soft mt-1" />
                <div>
                  <p className="font-medium">Kansas City Metro Area</p>
                  <p className="text-gray-400 text-sm">All surrounding counties</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} Cozy Home Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
