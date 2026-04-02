
import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Checkbox } from './ui/checkbox';

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
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
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
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Get Your Cash Offer
      </h3>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Fill out 3 quick fields — we'll respond within 24 hours.
      </p>

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 text-sm text-gray-600 max-w-xs mx-auto">
        <div className="flex items-center gap-1.5">
          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
          <span>No obligation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
          <span>24hr response</span>
        </div>
        <div className="flex items-center gap-1.5 col-span-2 justify-center">
          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
          <span>Zero fees</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={handleChange}
          placeholder="Property Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
          required
        />

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
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
          placeholder="Phone Number"
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
              <span>Processing...</span>
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
  );
};

export default HeroContactForm;
