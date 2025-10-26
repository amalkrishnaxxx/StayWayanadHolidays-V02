import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with EmailJS
    // For now, just simulate submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-40"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.4) 0%, rgba(26, 26, 26, 0.2) 50%, rgba(26, 26, 26, 0.4) 100%), url(https://images.unsplash.com/photo-1719831738921-972e0ec76337?w=1200)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="badge mb-6 inline-flex" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Phone size={16} />
            <span>Contact Us</span>
          </div>
          <h1 className="display-large text-white mb-6">Get in Touch</h1>
          <p className="body-large text-white max-w-3xl mx-auto">
            Let's plan your dream vacation together. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Information */}
            <div>
              <h2 className="heading-2 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="premium-card p-6 flex items-start gap-4">
                  <div className="icon-container" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Phone</h3>
                    <a
                      href="tel:+919544254930"
                      className="body-medium hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      +91 95442 54930
                    </a>
                  </div>
                </div>

                <div className="premium-card p-6 flex items-start gap-4">
                  <div className="icon-container" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Email</h3>
                    <a
                      href="mailto:info@staywayanad.com"
                      className="body-medium hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      info@staywayanad.com
                    </a>
                  </div>
                </div>

                <div className="premium-card p-6 flex items-start gap-4">
                  <div className="icon-container" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Location</h3>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      Wayanad, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div
                className="premium-card p-6"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                  border: 'none'
                }}
              >
                <h3 className="heading-3 text-white mb-4">Quick Connect via WhatsApp</h3>
                <p className="body-medium text-white/90 mb-6">
                  Get instant responses to your queries
                </p>
                <a
                  href="https://wa.me/919544254930?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                  style={{ background: 'white', color: 'var(--accent-primary)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
                >
                  <Phone size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-2 mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block body-medium font-semibold mb-2" style={{ color: '#FFFF' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all"
                    style={{
                      borderColor: 'var(--border-medium)',
                      background: 'var(--bg-card)'
                    }}
                    placeholder="Your full name"
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block body-medium font-semibold mb-2" style={{ color: '#FFFF' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all"
                    style={{
                      borderColor: 'var(--border-medium)',
                      background: 'var(--bg-card)'
                    }}
                    placeholder="your.email@example.com"
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block body-medium font-semibold mb-2" style={{ color: '#FFFF' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all"
                    style={{
                      borderColor: 'var(--border-medium)',
                      background: 'var(--bg-card)'
                    }}
                    placeholder="+91 XXXXX XXXXX"
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block body-medium font-semibold mb-2" style={{ color: '#FFFF' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all resize-none"
                    style={{
                      borderColor: 'var(--border-medium)',
                      background: 'var(--bg-card)'
                    }}
                    placeholder="Tell us about your travel plans..."
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge mb-4 inline-flex">
              <MapPin size={16} />
              <span style={{ color: 'black', fontWeight: 'bold' }}>Location</span>
            </div>
            <h2 className="heading-2">Find Us</h2>
          </div>
          <div className="premium-card overflow-hidden p-0 max-w-5xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125367.61419291076!2d75.90619!3d11.60518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba637c5cfc7ed5b%3A0xc21c2b5a3e2d8aa5!2sWayanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wayanad Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;