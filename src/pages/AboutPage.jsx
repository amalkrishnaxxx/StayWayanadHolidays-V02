import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Award size={32} />,
      title: '25+ Years of Experience',
      description: 'Proven expertise in hospitality and travel management'
    },
    {
      icon: <Heart size={32} />,
      title: 'Personalized Care',
      description: 'Every guest receives dedicated attention and support'
    },
    {
      icon: <Users size={32} />,
      title: 'Strong Network',
      description: 'Trusted partnerships with resorts, hotels, and travel partners'
    },
    {
      icon: <Shield size={32} />,
      title: 'Safety & Satisfaction',
      description: 'Your comfort and security are our top priorities'
    }
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section 
        className="relative py-32 md:py-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 69, 52, 0.7), rgba(0, 69, 52, 0.7)), url(https://images.unsplash.com/photo-1719831738921-972e0ec76337?w=1200)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="display-large text-white mb-6">About StayWayanad Holidays</h1>
          <p className="body-large text-white/90 max-w-3xl mx-auto">
            Creating unforgettable travel experiences since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-1 text-center mb-12">Our Story</h2>
            
            <div className="space-y-6 body-large" style={{ color: 'var(--text-secondary)' }}>
              <p>
                At <strong>StayWayanad Holidays</strong>, we believe every journey should be more than just travel – it should be an experience of a lifetime.
              </p>
              
              <p>
                Based in the lush green valleys of Wayanad since 2010, we specialize in crafting tailor-made holidays across South India, North India, and international destinations. Our passion for travel and commitment to excellence has made us a trusted name in the industry.
              </p>
              
              <p>
                Our founder, <strong>Mr. Mahesh Chandran</strong>, brings over 25 years of expertise in hospitality and ensures each guest enjoys a seamless stay, from the first enquiry to checkout. His vision has shaped our company into a customer-centric organization that prioritizes your comfort and satisfaction above all else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-center mb-4">Why Choose Us</h2>
          <p className="body-medium text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We go beyond expectations to ensure your trip is memorable
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="network-card text-center p-8">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
                >
                  {value.icon}
                </div>
                <h3 className="heading-3 mb-4">{value.title}</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-8">Our Commitment to You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="network-card p-6">
                <h3 className="heading-3 mb-3" style={{ color: 'var(--brand-dark)' }}>Quality Service</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  From luxury stays to budget-friendly options, we ensure every accommodation meets our high standards.
                </p>
              </div>
              
              <div className="network-card p-6">
                <h3 className="heading-3 mb-3" style={{ color: 'var(--brand-dark)' }}>Value for Money</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  Competitive pricing without compromising on quality or experience.
                </p>
              </div>
              
              <div className="network-card p-6">
                <h3 className="heading-3 mb-3" style={{ color: 'var(--brand-dark)' }}>24/7 Support</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  Our team is always available to assist you throughout your journey.
                </p>
              </div>
              
              <div className="network-card p-6">
                <h3 className="heading-3 mb-3" style={{ color: 'var(--brand-dark)' }}>Customization</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  Every itinerary is tailored to match your preferences and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="network-card p-8 md:p-12">
              <div className="text-center mb-8">
                <div 
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                  style={{ background: 'var(--brand-dark)' }}
                ></div>
                <h2 className="heading-2 mb-2">Mr. Mahesh Chandran</h2>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>Founder & Director</p>
              </div>
              
              <p className="body-large text-center" style={{ color: 'var(--text-secondary)' }}>
                "Travel is not just about visiting places; it's about creating memories that last a lifetime. At StayWayanad Holidays, we pour our heart into every trip we plan, ensuring our guests experience the magic of each destination."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;