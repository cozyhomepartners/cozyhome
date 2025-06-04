
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HeroFormSection from '../components/HeroFormSection';
import HowToSell from '../components/HowToSell';
import WeBuyHouses from '../components/WeBuyHouses';
import NoMatterSituation from '../components/NoMatterSituation';
import BenefitsOfSelling from '../components/BenefitsOfSelling';
import ServiceAreas from '../components/ServiceAreas';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HeroFormSection />
      <HowToSell />
      <WeBuyHouses />
      <NoMatterSituation />
      <BenefitsOfSelling />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
