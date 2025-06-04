
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HeroFormSection from '../components/HeroFormSection';
import HowToSell from '../components/HowToSell';
import Services from '../components/Services';
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
      <Services />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
