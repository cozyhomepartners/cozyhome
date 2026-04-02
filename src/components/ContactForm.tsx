
import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Checkbox } from './ui/checkbox';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    zipcode: '',
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
      setAddressError('Property address is required');
      return;
    }

    if (!consentChecked) {
      setStatus('consent-error');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyAddress: formData.propertyAddress,
          street: formData.street,
          unit: formData.unit,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
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
    <section id="contact-form" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Your Cash Offer?
            </h2>
            <p className="text-xl text-gray-300">
              Tell us about your property and we'll get back to you with a fair, no-obligation offer within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={(e) => {
                  setFormData({ ...formData, propertyAddress: e.target.value });
                  setAddressError('');
                }}
                placeholder="Property Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
                required
              />
              {addressError && (
                <p className="mt-1 text-sm text-red-600">{addressError}</p>
              )}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
                placeholder="Full Name"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
                placeholder="Email Address"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
                placeholder="Phone Number"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
                placeholder="Tell us about your property or situation..."
              />

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked === true)}
                  className="mt-1"
                />
                <div className="text-sm text-gray-600">
                  I agree to receive follow-up communications from Cozy Home Partners. See our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>.
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Get My Cash Offer</span>
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={18} />
                  <span className="text-sm">Error sending message. Please try again.</span>
                </div>
              )}
              
              {status === 'consent-error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={18} />
                  <span className="text-sm">Please agree to receive follow-up messages to continue.</span>
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
