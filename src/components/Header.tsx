
import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const counties = [
    { name: "Clay County, MO", path: "/clay-county-mo" },
    { name: "Cass County, MO", path: "/cass-county-mo" },
    { name: "Jackson County, MO", path: "/jackson-county-mo" },
    { name: "Wyandotte County, KS", path: "/wyandotte-county-ks" },
    { name: "Johnson County, KS", path: "/johnson-county-ks" },
    { name: "Platte County, KS", path: "/platte-county-ks" },
  ];

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
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/our-process" 
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                Our Process
              </Link>
              
              {/* Service Areas Navigation - hover only */}
              <div className="relative group">
                <span className="text-gray-700 font-medium cursor-default text-base">
                  Service Areas
                </span>
                <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-200 rounded-md shadow-lg w-[200px] p-4">
                    <div className="grid gap-3">
                      {counties.map((county) => (
                        <Link
                          key={county.path}
                          to={county.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-blue-600"
                        >
                          <div className="text-sm font-medium leading-none">{county.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <Mail size={18} className="text-blue-600" />
              <span className="font-medium">offer@cozyhomepartners.com</span>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation counties={counties} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
