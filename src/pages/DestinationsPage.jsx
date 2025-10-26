import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinations } from '../data/destinations';

const DestinationsPage = () => {
  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Section */}
      <section 
        className="relative py-32 md:py-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 69, 52, 0.7), rgba(0, 69, 52, 0.7)), url(https://images.unsplash.com/photo-1672063071574-dcfca88e892d?w=1200)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="display-large text-white mb-6">Explore Our Destinations</h1>
          <p className="body-large text-white/90 max-w-3xl mx-auto">
            From serene backwaters to misty mountains, discover the best of South India
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="network-card overflow-hidden p-0">
                <div className="h-72 overflow-hidden relative group">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full">
                    <MapPin size={16} style={{ color: 'var(--brand-dark)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--brand-dark)' }}>
                      {destination.state}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-3">{destination.name}</h3>
                  <p className="body-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {destination.shortDescription}
                  </p>
                  <Link 
                    to={`/destination/${destination.id}`} 
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-1 mb-6">Can't Decide Where to Go?</h2>
          <p className="body-large max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            Let our travel experts help you plan the perfect itinerary based on your preferences and budget.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;