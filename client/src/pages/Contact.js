import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-baby-blue mb-4">
            Contact Us
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h2>
              <p className="text-text-secondary mb-8">
                We're here to help you find the best deals and answer any questions about our price comparison platform.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-baby-blue/20 rounded-lg">
                    <FiMail className="text-baby-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Email</h3>
                    <p className="text-text-secondary mb-1">support@pricefinder.com</p>
                    <p className="text-sm text-text-secondary">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-baby-blue/20 rounded-lg">
                    <FiPhone className="text-baby-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Phone</h3>
                    <p className="text-text-secondary mb-1">1-800-PRICE-FIND</p>
                    <p className="text-sm text-text-secondary">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-baby-blue/20 rounded-lg">
                    <FiMapPin className="text-baby-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Office</h3>
                    <p className="text-text-secondary mb-1">123 Tech Street</p>
                    <p className="text-text-secondary mb-1">San Francisco, CA 94105</p>
                    <p className="text-sm text-text-secondary">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-baby-blue mb-2">How does Price Finder work?</h4>
                  <p className="text-text-secondary text-sm">
                    We compare prices across multiple e-commerce stores to help you find the best deals on products you want to buy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-baby-blue mb-2">Is the service free?</h4>
                  <p className="text-text-secondary text-sm">
                    Yes! Price Finder is completely free to use. We earn small commissions from our partner stores.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-baby-blue mb-2">How often are prices updated?</h4>
                  <p className="text-text-secondary text-sm">
                    Our system updates prices continuously throughout the day to ensure you always see the most current prices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl text-green-400 mb-4">
                    <FiCheck />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-baby-blue text-dark-navy px-6 py-2 rounded-lg font-semibold hover:bg-silver transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-3 text-text-primary focus:border-baby-blue focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-3 text-text-primary focus:border-baby-blue focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-3 text-text-primary focus:border-baby-blue focus:outline-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-3 text-text-primary focus:border-baby-blue focus:outline-none resize-none"
                      placeholder="Tell us more about your question or feedback..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-baby-blue text-dark-navy py-3 px-6 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-navy"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
