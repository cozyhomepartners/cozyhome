
import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';
import { scrollToOfferForm } from '@/lib/scrollToForm';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/e86a097d-c38b-4d16-8d67-8ae81767ce03.png" 
                alt="Cozy Home Partners Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation and Contact Info */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-ink font-medium hover:text-brand transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/our-process" 
                className="text-ink font-medium hover:text-brand transition-colors"
              >
                Our Process
              </Link>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToOfferForm}
              className="hidden md:inline-flex bg-brand hover:bg-brand-dark text-brand-foreground py-3 px-5 rounded-lg font-semibold text-base transition-all duration-200"
            >
              Get My Cash Offer
            </button>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
