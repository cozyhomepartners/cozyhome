import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Checkbox } from './ui/checkbox';

const fieldClass =
  "w-full px-4 py-3 text-lg text-ink bg-white border-2 border-input rounded-lg focus:border-brand focus:outline-none placeholder:text-ink-soft/60";

const labelClass = "block text-base font-semibold text-ink mb-1.5";

const HeroContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentChecked) {
      setStatus('consent-error');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const { error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyAddress: formData.propertyAddress,
          street: '',
          unit: '',
          city: '',
          state: '',
          zipcode: '',
          message: ''
        }
      });

      if (error) throw error;
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="hero-form" className="bg-white rounded-2xl shadow-2xl border border-border p-6 lg:p-8 scroll-mt-28">
      <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-2 text-center">
        Get your cash offer
      </h2>
      <p className="text-center text-ink-soft mb-5 text-base">
        Four quick fields. We reply within 24 hours.
      </p>

      {/* Trust signals */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-base text-ink-soft">
        {['No obligation', '24hr response', 'Zero fees'].map((signal) => (
          <div key={signal} className="flex items-center gap-1.5">
            <CheckCircle size={18} className="text-success flex-shrink-0" />
            <span>{signal}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hero-address" className={labelClass}>Property address</label>
          <input
            id="hero-address"
            type="text"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            placeholder="123 Main St, Kansas City, MO"
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="hero-name" className={labelClass}>Full name</label>
          <input
            id="hero-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={fieldClass}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="hero-email" className={labelClass}>Email address</label>
          <input
            id="hero-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="hero-phone" className={labelClass}>Phone number</label>
          <input
            id="hero-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={fieldClass}
            placeholder="(816) 555-0134"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-3 pt-1">
          <Checkbox
            id="hero-consent"
            checked={consentChecked}
            onCheckedChange={(checked) => setConsentChecked(checked === true)}
            className="mt-1"
          />
          <label htmlFor="hero-consent" className="text-base text-ink-soft leading-snug cursor-pointer">
            I agree to receive follow-up communications from Cozy Home Partners. See our{' '}
            <a href="/privacy-policy" className="text-brand underline">privacy policy</a>.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-brand-foreground py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Get My Cash Offer</span>
            </>
          )}
        </button>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
            <AlertCircle size={20} />
            <span className="text-base">Something went wrong. Please try again.</span>
          </div>
        )}

        {status === 'consent-error' && (
          <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
            <AlertCircle size={20} />
            <span className="text-base">Please check the consent box to continue.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default HeroContactForm;
