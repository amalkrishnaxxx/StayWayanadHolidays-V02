import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Heart, Users, Compass, Star, Sparkles } from 'lucide-react';
import { destinations } from '../data/destinations';

const HomePage = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1719831738921-972e0ec76337?w=1200',
    'https://images.unsplash.com/photo-1672063071574-dcfca88e892d?w=1200',
    'https://images.unsplash.com/photo-1720591658325-90372cc7da02?w=1200'
  ];

  const features = [
    {
      icon: <Compass size={32} />,
      title: 'Tailored Itineraries',
      description: 'Every trip is customized to match your preferences and dreams'
    },
    {
      icon: <Star size={32} />,
      title: 'Expert Knowledge',
      description: '25+ years of hospitality experience at your service'
    },
    {
      icon: <Heart size={32} />,
      title: 'Seamless Booking',
      description: 'Hassle-free planning from inquiry to checkout'
    }
  ];

  const packages = [
    { icon: <Users size={28} />, title: 'Family & Group Packages', subtitle: 'Create memories together' },
    { icon: <Heart size={28} />, title: 'Honeymoon Trips', subtitle: 'Romantic getaways' },
    { icon: <Star size={28} />, title: 'Bachelor Getaways', subtitle: 'Adventure with friends' }
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.4) 0%, rgba(26, 26, 26, 0.2) 50%, rgba(26, 26, 26, 0.4) 100%), url(${heroImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating elements for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32 md:py-40 text-center relative z-10">
          <div className="badge mb-6 inline-flex" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Sparkles size={16} />
            <span>Premium Travel Experiences</span>
          </div>
          <h1 className="display-large text-white mb-6 fade-in-up">
            Crafting Personalized Journeys<br />That Exceed Expectations
          </h1>
          <p className="body-large text-white/90 max-w-3xl mx-auto mb-10 fade-in-up delay-100">
            With years of expertise and a deep love for travel, we connect you with the world's most breathtaking destinations.
          </p>
          <Link to="/contact" className="btn-cta fade-in-up delay-200">
            Plan Your Trip <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Explore With Us Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mb-4 inline-flex">
              <Star size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="heading-1 mb-4">Explore with Us</h2>
            <p className="body-medium max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We specialize in creating unforgettable travel experiences tailored just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="premium-card text-center p-8 scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-container mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="heading-3 mb-4">{feature.title}</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Your Next Adventure */}
      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <div 
            className="glass-card p-12 md:p-16 text-center max-w-5xl mx-auto"
          >
            <h2 className="heading-1 mb-6">Discover Your Next Adventure</h2>
            <p className="body-large max-w-3xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
              Whether you're seeking relaxation, adventure, or cultural immersion, we're here to guide you every step of the way. Let's start planning your dream trip today!
            </p>
            <Link to="/destinations" className="btn-primary">
              Start Exploring <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mb-4 inline-flex">
              <Compass size={16} />
              <span>Handpicked Destinations</span>
            </div>
            <h2 className="heading-1 mb-4">Popular Destinations</h2>
            <p className="body-medium max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Explore our curated collection of breathtaking destinations across South India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.slice(0, 6).map((destination, index) => (
              <div key={destination.id} className="premium-card overflow-hidden p-0 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-64 overflow-hidden image-hover-zoom relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 badge">
                    {destination.state}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-3">{destination.name}</h3>
                  <p className="body-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {destination.shortDescription}
                  </p>
                  <Link 
                    to={`/destination/${destination.id}`} 
                    className="btn-secondary inline-flex items-center gap-2 w-full justify-center"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mb-4 inline-flex">
              <Heart size={16} />
              <span>Custom Packages</span>
            </div>
            <h2 className="heading-1 mb-4">Special Packages</h2>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Stay • Sightseeing • Customized Itineraries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="premium-card text-center p-8"
              >
                <div className="icon-container mx-auto mb-6">
                  {pkg.icon}
                </div>
                <h3 className="heading-3 mb-3">{pkg.title}</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {pkg.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div 
            className="premium-card text-center p-12 md:p-16 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
              border: 'none'
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <Phone size={48} className="mx-auto mb-6 text-white" />
              <h2 className="heading-1 text-white mb-4">Ready to Start Your Journey?</h2>
              <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
                Book Now – Call / WhatsApp: +91 95442 54930
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/919544254930?text=Hi%2C%20I%20would%20like%20to%20book%20a%20trip%20with%20StayWayanad%20Holidays" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary" 
                  style={{ background: 'white', color: 'var(--accent-primary)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
                >
                  <Phone size={20} /> WhatsApp Now
                </a>
                <Link 
                  to="/contact" 
                  className="btn-secondary" 
                  style={{ borderColor: 'white', color: 'white', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                >
                  Book Your Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;