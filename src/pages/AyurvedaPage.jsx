import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Sparkles, Phone } from 'lucide-react';

const AyurvedaPage = () => {
  const services = [
    {
      icon: <Leaf size={32} />,
      title: 'Ayurvedic Treatments',
      description: 'Personalized therapies and massages tailored to your body type and wellness goals. Experience authentic Ayurveda practiced by certified therapists.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Spa Oasis',
      description: 'Immerse yourself in calm surroundings designed to rejuvenate your senses. Our spa facilities offer the perfect escape from daily stress.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Holistic Wellness',
      description: 'Yoga, meditation, and inner peace programs designed to harmonize your mind, body, and spirit for complete wellbeing.'
    }
  ];

  const treatments = [
    {
      name: 'Abhyanga',
      description: 'Traditional full-body oil massage for relaxation and detoxification',
      duration: '60-90 minutes'
    },
    {
      name: 'Shirodhara',
      description: 'Warm oil therapy for mental clarity and stress relief',
      duration: '45-60 minutes'
    },
    {
      name: 'Panchakarma',
      description: 'Complete detoxification and rejuvenation program',
      duration: '7-21 days'
    },
    {
      name: 'Pizhichil',
      description: 'Royal treatment with warm medicated oil for joint and muscle health',
      duration: '75-90 minutes'
    },
    {
      name: 'Njavarakizhi',
      description: 'Rice bolus massage for nourishment and vitality',
      duration: '60-75 minutes'
    },
    {
      name: 'Kativasti',
      description: 'Lower back therapy for pain relief and strength',
      duration: '45-60 minutes'
    }
  ];

  const benefits = [
    'Stress and anxiety relief',
    'Improved sleep quality',
    'Enhanced immunity',
    'Pain management',
    'Skin rejuvenation',
    'Mental clarity and focus',
    'Detoxification',
    'Balanced energy levels'
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section 
        className="relative py-32 md:py-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 69, 52, 0.7), rgba(0, 69, 52, 0.7)), url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="display-large text-white mb-6">Rejuvenate Your Body and Soul</h1>
          <p className="body-large text-white/90 max-w-3xl mx-auto">
            Experience the ancient healing wisdom of Ayurveda in Kerala's most serene wellness retreats
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-center mb-4">Wellness Programs</h2>
          <p className="body-medium text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Discover our comprehensive approach to holistic health and wellbeing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="network-card p-8 text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
                >
                  {service.icon}
                </div>
                <h3 className="heading-3 mb-4">{service.title}</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-center mb-4">Ayurvedic Treatments</h2>
          <p className="body-medium text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Authentic Kerala Ayurveda therapies for your specific health needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="network-card p-6">
                <h3 className="heading-3 mb-3" style={{ color: 'var(--brand-dark)' }}>
                  {treatment.name}
                </h3>
                <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {treatment.description}
                </p>
                <p className="text-sm font-semibold" style={{ color: 'var(--brand-dark)' }}>
                  Duration: {treatment.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-1 text-center mb-4">Benefits of Ayurveda</h2>
            <p className="body-medium text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Transform your health with time-tested natural healing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'var(--bg-card)' }}>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--brand-primary)' }}
                  >
                    <Leaf size={20} style={{ color: 'var(--brand-dark)' }} />
                  </div>
                  <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Kerala for Ayurveda */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-6">Why Kerala for Ayurveda?</h2>
            <div className="space-y-6 body-large text-left" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Kerala is recognized as the birthplace of Ayurveda, where this ancient healing science has been practiced and preserved for over 5,000 years. The state's unique climate, abundant medicinal plants, and authentic practitioners make it the ideal destination for Ayurvedic treatments.
              </p>
              <p>
                Our partner wellness centers in Kerala follow traditional methods passed down through generations, ensuring you receive genuine Ayurvedic care in serene, natural surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="network-card p-12 md:p-16 text-center" style={{ background: 'var(--brand-dark)' }}>
            <Heart size={48} className="mx-auto mb-6" style={{ color: 'white' }} />
            <h2 className="heading-1 text-white mb-4">Begin Your Wellness Journey</h2>
            <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
              Book your Ayurveda retreat today and experience the transformative power of ancient healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919544254930?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Ayurveda%20wellness%20retreat" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
              >
                <Phone size={20} /> WhatsApp Now
              </a>
              <Link to="/contact" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Book Your Retreat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedaPage;