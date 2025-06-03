
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', {
        ...formData,
        recipient: 'charles@cozyhomepartners.com'
      });
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyAddress: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Contact us today for a free consultation about your Kansas City real estate needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="1234 Main St, Kansas City, MO 64111"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="(816) 555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle size={20} />
                  <span>There was an error sending your message. Please try again.</span>
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
