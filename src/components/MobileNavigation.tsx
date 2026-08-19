
import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useIsMobile } from "../hooks/use-mobile";

const MobileNavigation = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isMobile) return null;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6 text-ink" />
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
              onClick={handleHomeClick}
              className="block text-ink font-medium hover:text-brand transition-colors py-2"
            >
              Home
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link 
              to="/our-process" 
              className="block text-ink font-medium hover:text-brand transition-colors py-2"
            >
              Our Process
            </Link>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigation;
