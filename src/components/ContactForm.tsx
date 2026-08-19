import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Checkbox } from './ui/checkbox';

const fieldClass =
  "w-full px-4 py-3 text-lg text-ink bg-white border-2 border-input rounded-lg focus:border-brand focus:outline-none placeholder:text-ink-soft/60";

const labelClass = "block text-base font-semibold text-ink mb-1.5";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addressError, setAddressError] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.propertyAddress.trim()) {
      setAddressError('Please enter the property address.');
      return;
    }

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
          message: formData.message
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
    <section id="contact-form" className="py-20 bg-ink scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to see your number?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Tell us about the property. We reply within 24 hours with a fair,
              no-obligation cash offer, and there is nothing to sign to see it.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
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
                <label htmlFor="cf-address" className={labelClass}>Property address</label>
                <input
                  id="cf-address"
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={(e) => {
                    setFormData({ ...formData, propertyAddress: e.target.value });
                    setAddressError('');
                  }}
                  placeholder="123 Main St, Kansas City, MO"
                  className={fieldClass}
                  required
                />
                {addressError && (
                  <p className="mt-1.5 text-base text-destructive">{addressError}</p>
                )}
              </div>

              <div>
                <label htmlFor="cf-name" className={labelClass}>Full name</label>
                <input
                  id="cf-name"
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
                <label htmlFor="cf-email" className={labelClass}>Email address</label>
                <input
                  id="cf-email"
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
                <label htmlFor="cf-phone" className={labelClass}>Phone number</label>
                <input
                  id="cf-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="(816) 555-0134"
                />
              </div>

              <div>
                <label htmlFor="cf-message" className={labelClass}>
                  Anything we should know? <span className="font-normal text-ink-soft">(optional)</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={fieldClass}
                  placeholder="Condition, timeline, tenants, or anything else."
                />
              </div>

              <div className="flex items-start space-x-3 pt-1">
                <Checkbox
                  id="cf-consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked === true)}
                  className="mt-1"
                />
                <label htmlFor="cf-consent" className="text-base text-ink-soft leading-snug cursor-pointer">
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
