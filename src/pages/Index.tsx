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
import FAQ from '../components/FAQ';
import { faqsFor, faqJsonLd } from '@/data/faqs';
import { businessJsonLd, websiteJsonLd } from '@/lib/schema';

const faqs = faqsFor();
import { useScrollRestoration } from '../hooks/useScrollRestoration';

const Index = () => {
  useScrollRestoration();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="We Buy Houses Kansas City | Sell Your House Fast for Cash | Cozy Home Partners"
        description="Sell your Kansas City house fast for cash. Local buyers in MO & KS: cash offer in 24 hours, no repairs, no commissions, no closing costs. Close in as little as 7 days."
        path="/"
        jsonLd={[businessJsonLd(), websiteJsonLd(), faqJsonLd(faqs)]}
      />
      <Header />
      <main>
      <Hero />
      <MlsComparison />
      <HowToSell />
      <BenefitsOfSelling />
      <WeBuyHouses />
      <ServiceAreas />
      <FAQ faqs={faqs} />
      <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
