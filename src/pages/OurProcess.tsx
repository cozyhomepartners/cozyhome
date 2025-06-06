
import React from 'react';
import Header from '../components/Header';
import HeroFormSection from '../components/HeroFormSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Clock, DollarSign, FileText, Home, Key } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Give us a call or fill out our form to tell us about your property. We'll ask a few questions about your house and situation.",
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      number: "02", 
      title: "Property Evaluation",
      description: "We'll schedule a convenient time to view your property. Our team will assess the condition and location to determine a fair offer.",
      icon: <Home className="w-8 h-8 text-blue-600" />
    },
    {
      number: "03",
      title: "Receive Your Offer",
      description: "Within 24 hours, we'll present you with a no-obligation cash offer. No hidden fees, no commissions, no closing costs.",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />
    },
    {
      number: "04",
      title: "Accept & Schedule Closing",
      description: "If you accept our offer, we'll work with you to schedule a closing date that works for your timeline. Close in as little as 7 days.",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      number: "05",
      title: "Get Your Cash",
      description: "At closing, you'll receive your cash payment. It's that simple! No waiting for buyer financing or deal complications.",
      icon: <Key className="w-8 h-8 text-blue-600" />
    }
  ];

  const benefits = [
    "No real estate agent commissions",
    "No closing costs or hidden fees", 
    "No repairs or renovations needed",
    "Close on your timeline",
    "Cash payment at closing",
    "No showings or open houses"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our Process - How We Buy Houses in Kansas City | Cozy Home Partners"
        description="Learn about our simple 5-step process for buying houses in Kansas City. Get a cash offer in 24 hours with no fees, repairs, or hassles."
        keywords="how we buy houses, cash home buying process, sell house process, Kansas City"
        canonicalUrl="https://cozyhomepartners.com/our-process"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our Simple 
              <span className="text-blue-600 block">5-Step Process</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Selling your house has never been easier. Our streamlined process gets you cash fast, 
              with no hassles, no fees, and no surprises.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24 Hours</div>
                <div className="text-gray-600">For Your Offer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">7 Days</div>
                <div className="text-gray-600">To Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$0</div>
                <div className="text-gray-600">Fees or Commissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroFormSection />

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial contact to cash in hand, our process is designed to be fast, 
              transparent, and stress-free.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex items-start mb-12">
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-8 w-0.5 h-20 bg-gray-200"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-grow">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Process?
              </h2>
              <p className="text-lg text-gray-600">
                We've eliminated the traditional hassles of selling your home
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your fair cash offer today. No obligations, no pressure.
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get My Cash Offer
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default OurProcess;
