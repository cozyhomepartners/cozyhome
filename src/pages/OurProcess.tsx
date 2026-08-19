import React, { useEffect } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Clock, DollarSign, FileText, Home, Key } from 'lucide-react';

const OurProcess = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Send Us the Address",
      description: "Fill out our form with the property address. It takes about a minute, and there is no obligation of any kind.",
      icon: <FileText className="w-8 h-8 text-brand" />
    },
    {
      number: "02", 
      title: "One Quick Visit",
      description: "We stop by once, at a time that suits you, usually for under 30 minutes. No open houses, no strangers, and nothing to clean or fix beforehand.",
      icon: <Home className="w-8 h-8 text-brand" />
    },
    {
      number: "03",
      title: "Get Your Written Offer",
      description: "Within 24 hours you get a fair cash offer in writing, with the number explained. No commissions, no closing costs, no hidden fees.",
      icon: <DollarSign className="w-8 h-8 text-brand" />
    },
    {
      number: "04",
      title: "You Pick the Closing Date",
      description: "If the number works, you pick the closing date. Close in as little as 7 days, or take a few months if you need time to move.",
      icon: <Clock className="w-8 h-8 text-brand" />
    },
    {
      number: "05",
      title: "Get Paid",
      description: "You get paid at closing. Our funds are our own, so there is no lender, no appraisal and no last-minute collapse.",
      icon: <Key className="w-8 h-8 text-brand" />
    }
  ];

  const benefits = [
    "No real estate agent commissions",
    "No closing costs or hidden fees", 
    "No repairs or renovations needed",
    "Close on your timeline",
    "Cash payment at closing",
    "One private visit — no showings or open houses"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our 5-Step Home Buying Process | Cozy Home Partners"
        description="Learn about our simple 5-step process for buying houses in Kansas City. Get a cash offer in 24 hours with no fees, repairs, or hassles."
        keywords="how we buy houses, cash home buying process, sell house process, Kansas City"
        canonicalUrl="https://www.cozyhomepartners.com/our-process"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-soft to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Our Simple 
              <span className="text-brand block">5-Step Process</span>
            </h1>
            
            <p className="text-xl text-ink-soft leading-relaxed mb-8">
              A clear alternative to listing on the MLS: no repairs, no showings beyond one quick visit, and a firm cash offer within 24 hours.
            </p>

            <button
              onClick={() => {
                const form = document.getElementById('contact-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand hover:bg-brand-dark text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-8"
            >
              Get My Cash Offer
            </button>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-ink">24 Hours</div>
                <div className="text-ink-soft">For Your Offer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ink">7 Days</div>
                <div className="text-ink-soft">To Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ink">$0</div>
                <div className="text-ink-soft">Fees or Commissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink mb-4">
              How It Works
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">
              From the first form to cash in hand. Every step is on your timeline, and you can stop at any point.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex items-start mb-12">
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold">
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
                          <h3 className="text-2xl font-bold text-ink mb-3">
                            {step.title}
                          </h3>
                          <p className="text-ink-soft text-lg leading-relaxed">
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
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink mb-4">
                Why Choose Our Process?
              </h2>
              <p className="text-lg text-ink-soft">
                Everything a traditional MLS listing asks of you, removed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-ink font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default OurProcess;
