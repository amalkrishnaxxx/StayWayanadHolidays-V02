import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Clock, Check, Phone, Utensils, Users } from 'lucide-react';

const HouseboatsPage = () => {
  const houseboatTypes = [
    {
      title: 'Deluxe Houseboat',
      description: 'Budget-friendly option with all essential amenities',
      features: ['Standard rooms', 'Traditional Kerala meals', 'Friendly crew', 'Scenic views'],
      icon: <Ship size={32} />
    },
    {
      title: 'Premium Houseboat',
      description: 'Full-time A/C with authentic Kerala cuisine',
      features: ['Air-conditioned rooms', 'Premium Kerala cuisine', 'Professional crew', 'Entertainment'],
      icon: <Ship size={32} />
    },
    {
      title: 'Luxury Houseboat',
      description: 'Spacious, gourmet dining, and lounge area',
      features: ['Luxury suites', 'Gourmet dining', 'Private deck', 'Butler service'],
      icon: <Ship size={32} />
    }
  ];

  const amenities = [
    { icon: <Users size={24} />, text: 'Spacious rooms with attached bathrooms' },
    { icon: <Utensils size={24} />, text: 'Traditional Kerala cuisine' },
    { icon: <Users size={24} />, text: 'Friendly and professional crew' },
    { icon: <Ship size={24} />, text: 'Scenic backwater cruising' }
  ];

  const schedule = [
    { time: 'Check-in', detail: '11:30 AM', icon: <Clock size={20} /> },
    { time: 'Lunch Cruise', detail: '12:00 PM - 1:30 PM', icon: <Clock size={20} /> },
    { time: 'Afternoon Cruise', detail: '2:30 PM - 5:30 PM', icon: <Clock size={20} /> },
    { time: 'Morning Cruise', detail: '8:00 AM - 9:00 AM (Next day)', icon: <Clock size={20} /> },
    { time: 'Check-out', detail: '9:00 AM', icon: <Clock size={20} /> }
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section 
        className="relative py-32 md:py-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 69, 52, 0.7), rgba(0, 69, 52, 0.7)), url(https://images.unsplash.com/photo-1707893013488-51672ef83425?w=1200)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="display-large text-white mb-6">Experience the Magic of Alleppey Houseboats</h1>
          <p className="body-large text-white/90 max-w-3xl mx-auto">
            Glide through serene backwaters and discover Kerala's natural beauty
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-1 mb-6">A Journey Like No Other</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Step aboard a traditional Kerala houseboat and embark on an unforgettable voyage through the tranquil backwaters of Alleppey. Experience the perfect blend of luxury, comfort, and natural beauty as you cruise past lush paddy fields, coconut groves, and charming villages.
            </p>
          </div>
        </div>
      </section>

      {/* Houseboat Types */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-center mb-4">Choose Your Houseboat</h2>
          <p className="body-medium text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Select from our range of houseboats to match your comfort and budget
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {houseboatTypes.map((type, index) => (
              <div key={index} className="network-card p-8">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
                >
                  {type.icon}
                </div>
                <h3 className="heading-3 mb-4">{type.title}</h3>
                <p className="body-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check size={20} style={{ color: 'var(--brand-dark)' }} />
                      <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-center mb-4">Amenities Onboard</h2>
          <p className="body-medium text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Everything you need for a comfortable journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="network-card p-6 text-center">
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                  style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
                >
                  {amenity.icon}
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {amenity.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-center mb-4">Cruise Schedule</h2>
          <p className="body-medium text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A typical day on your houseboat adventure
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="network-card p-6 flex items-center gap-6">
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                  style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-1">{item.time}</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="network-card p-12 md:p-16 text-center" style={{ background: 'var(--brand-dark)' }}>
            <Ship size={48} className="mx-auto mb-6" style={{ color: 'white' }} />
            <h2 className="heading-1 text-white mb-4">Ready to Sail the Backwaters?</h2>
            <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
              Book your houseboat experience today and create memories that last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919544254930?text=Hi%2C%20I%20would%20like%20to%20book%20a%20houseboat%20experience" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ background: 'var(--brand-primary)', color: 'var(--brand-dark)' }}
              >
                <Phone size={20} /> WhatsApp Now
              </a>
              <Link to="/contact" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseboatsPage;