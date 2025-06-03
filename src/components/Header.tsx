
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b9e84219-b02c-49ba-b202-2a419ea4230d.png" 
              alt="Cozy Home Partners Logo" 
              className="h-8 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Cozy Home Partners</h1>
              <p className="text-xs text-gray-600">Kansas City Real Estate</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={18} className="text-blue-600" />
              <span className="font-medium">(816) 555-0123</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail size={18} className="text-blue-600" />
              <span className="font-medium">charles@cozyhomepartners.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
