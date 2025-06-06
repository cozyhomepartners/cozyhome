
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ClayCountyMO from "./pages/ClayCountyMO";
import CassCountyMO from "./pages/CassCountyMO";
import JacksonCountyMO from "./pages/JacksonCountyMO";
import WyandotteCountyKS from "./pages/WyandotteCountyKS";
import JohnsonCountyKS from "./pages/JohnsonCountyKS";
import PlatteCountyKS from "./pages/PlatteCountyKS";
import NotFound from "./pages/NotFound";

const App = () => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/clay-county-mo" element={<ClayCountyMO />} />
              <Route path="/cass-county-mo" element={<CassCountyMO />} />
              <Route path="/jackson-county-mo" element={<JacksonCountyMO />} />
              <Route path="/wyandotte-county-ks" element={<WyandotteCountyKS />} />
              <Route path="/johnson-county-ks" element={<JohnsonCountyKS />} />
              <Route path="/platte-county-ks" element={<PlatteCountyKS />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
