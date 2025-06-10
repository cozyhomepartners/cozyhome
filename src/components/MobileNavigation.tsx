
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useIsMobile } from "../hooks/use-mobile";

interface MobileNavigationProps {
  counties: Array<{ name: string; path: string }>;
}

const MobileNavigation = ({ counties }: MobileNavigationProps) => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <DrawerClose asChild>
            <Link 
              to="/" 
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors py-2"
            >
              Home
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link 
              to="/our-process" 
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors py-2"
            >
              Our Process
            </Link>
          </DrawerClose>
          
          <div className="border-t pt-4">
            <h3 className="text-gray-900 font-semibold mb-2">Service Areas</h3>
            {counties.map((county) => (
              <DrawerClose key={county.path} asChild>
                <Link
                  to={county.path}
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-1 pl-4"
                >
                  {county.name}
                </Link>
              </DrawerClose>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigation;
