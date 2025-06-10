
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Force focus to body to ensure proper mobile scrolling
    if (document.body) {
      document.body.focus();
      // Remove focus outline
      document.body.style.outline = 'none';
    }
  }, [location.pathname]);
};
