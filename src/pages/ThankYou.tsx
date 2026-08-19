
import React from 'react';
import { CheckCircle, Home, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-soft to-white flex items-center justify-center px-6">
      <SEOHead
        title="Thank You — Your Cash Offer Request | Cozy Home Partners"
        description="Thanks for reaching out. We received your property details and will follow up shortly with a fair, no-obligation cash offer."
        canonicalUrl="https://www.cozyhomepartners.com/thank-you"
      />
      <div className="max-w-2xl mx-auto text-center">

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-success" />
          </div>
          
          <h1 className="text-4xl font-bold text-ink mb-4">
            Thank You!
          </h1>

          {/* Response time promise */}
          <div className="inline-flex items-center gap-2 bg-brand-soft text-brand-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock size={16} />
            <span>We'll contact you within 2 hours during business hours</span>
          </div>
          
          <p className="text-xl text-ink-soft mb-8 leading-relaxed">
            We've received your property information and a team member will reach out shortly with a fair, no-obligation cash offer.
          </p>
          
          <div className="bg-brand-soft rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-ink mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-ink">We'll review your property details and research comparable sales</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-ink">A team member will contact you to schedule a walkthrough</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-ink">You'll receive a fair, no-obligation cash offer — close in as few as 7 days</p>
              </div>
            </div>
          </div>

          {/* Learn more about the process */}
          <div className="mb-8">
            <Link 
              to="/our-process"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>See Our Full Process</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-ink-soft">Need to reach us immediately?</p>
            <div className="flex justify-center">
              <a 
                href="mailto:offer@cozyhomepartners.com" 
                className="flex items-center justify-center space-x-2 bg-ink hover:bg-ink/90 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={18} />
                <span>offer@cozyhomepartners.com</span>
              </a>
            </div>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-brand hover:text-brand-dark font-medium transition-colors"
          >
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
