import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MlsComparison from '../components/MlsComparison';
import HowToSell from '../components/HowToSell';
import BenefitsOfSelling from '../components/BenefitsOfSelling';
import WeBuyHouses from '../components/WeBuyHouses';
import ServiceAreas from '../components/ServiceAreas';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useScrollRestoration } from '../hooks/useScrollRestoration';

const Index = () => {
  useScrollRestoration();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Cozy Home Partners - Kansas City"
        description="Cash home buyers in the Kansas City metro: Liberty MO, Raytown, Lenexa, Olathe, Shawnee and Prairie Village KS. Get your fair cash offer today."
        keywords="we buy houses for cash liberty mo, cash home buyers raytown, we buy houses lenexa ks, we buy houses cash kc, we buy houses kansas, we buy houses olathe ks, cash home buyers prairie village ks, cash home buyers lenexa ks, we buy houses shawnee ks, cash home buyers lenexa"
        canonicalUrl="https://www.cozyhomepartners.com/"
      />
      <Header />
      <Hero />
      <MlsComparison />
      <HowToSell />
      <BenefitsOfSelling />
      <WeBuyHouses />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
