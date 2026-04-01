
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';

interface AddressData {
  street: string;
  unit: string;
  city: string;
  state: string;
  zipcode: string;
  fullAddress: string;
}

const HeroContactForm = () => {
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

  const handleAddressSelect = (address: string) => {
    setFormData({
      ...formData,
      propertyAddress: address
    });
    setAddressError('');
  };

  const handleDetailedAddressSelect = (addressData: AddressData) => {
    setFormData({
      ...formData,
      propertyAddress: addressData.fullAddress,
      street: addressData.street,
      unit: addressData.unit,
      city: addressData.city,
      state: addressData.state,
      zipcode: addressData.zipcode,
    });
    setAddressError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - check property address and consent
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

      if (error) {
        throw error;
      }

      console.log('Form submitted successfully:', data);
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
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Get Your Cash Offer
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <AddressAutocomplete
            value={formData.propertyAddress}
            onChange={handleAddressSelect}
            onAddressSelect={handleDetailedAddressSelect}
            placeholder="Property Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
            required
            error={addressError}
          />
        </div>

        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
            placeholder="Full Name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-gray-500 placeholder:text-base"
            placeholder="Phone Number"
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
        </div>

        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none placeholder:text-gray-500 placeholder:text-base"
            placeholder="Tell us about your property or situation..."
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-3">
          <Checkbox 
            checked={consentChecked}
            onCheckedChange={(checked) => setConsentChecked(checked === true)}
            className="mt-1"
          />
          <div className="text-sm text-gray-600">
            By submitting this form, you agree to receive follow-up messages from 
            Cozy Home Partners. Text and data rates may apply. Message frequency varies. Reply 
            STOP to unsubscribe. See our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>{' '}
            for more details.
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
