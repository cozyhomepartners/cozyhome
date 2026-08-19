import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-alt text-ink">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-soft text-sm">
            © {new Date().getFullYear()} Cozy Home Partners. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
