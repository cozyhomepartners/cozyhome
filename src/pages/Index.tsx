
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HeroFormSection from '../components/HeroFormSection';
import HowToSell from '../components/HowToSell';
import BenefitsOfSelling from '../components/BenefitsOfSelling';
import WeBuyHouses from '../components/WeBuyHouses';
import NoMatterSituation from '../components/NoMatterSituation';
import ServiceAreas from '../components/ServiceAreas';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="We Buy Houses Kansas City - Fast Cash Home Buyers | Cozy Home Partners"
        description="We buy houses in Kansas City for cash! Get a fair offer in 24 hours. No fees, no repairs needed. Trusted cash home buyers serving Missouri and Kansas counties."
        keywords="we buy houses, cash home buyers, sell house fast, Kansas City real estate, Missouri, Kansas, home buyers"
        canonicalUrl="https://cozyhomepartners.com/"
      />
      <Header />
      <Hero />
      <HeroFormSection />
      <HowToSell />
      <BenefitsOfSelling />
      <WeBuyHouses />
      <NoMatterSituation />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
