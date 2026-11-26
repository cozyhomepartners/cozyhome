import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import Index from "./pages/Index";
import OurProcess from "./pages/OurProcess";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import CityPage from "./pages/CityPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";

// The router is supplied by the caller: BrowserRouter in the browser
// (main.tsx), StaticRouter when pre-rendering (entry-server.tsx).
const App = ({
  router: Router,
  helmetContext,
}: {
  router: React.ComponentType<{ children: React.ReactNode }>;
  helmetContext?: { helmet?: HelmetServerState };
}) => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/our-process" element={<OurProcess />} />
              <Route path="/we-buy-houses" element={<ServiceAreasPage />} />
              <Route path="/we-buy-houses/:slug" element={<CityPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
