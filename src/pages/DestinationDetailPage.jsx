import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, CheckCircle, Phone } from 'lucide-react';
import { destinations } from '../data/destinations';

const DestinationDetailPage = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div style={{ background: 'var(--bg-page)' }} className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-2 mb-4">Destination not found</h2>
          <Link to="/destinations" className="btn-primary">Back to Destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero Image */}
      <section 
        className="relative h-96 md:h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 69, 52, 0.4), rgba(0, 69, 52, 0.4)), url(${destination.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Destinations
          </Link>
          <h1 className="display-large text-white mb-4">{destination.name}</h1>
          <div className="flex items-center gap-2 text-white">
            <MapPin size={20} />
            <span className="body-medium text-white">{destination.state}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Description */}
            <div className="mb-16">
              <h2 className="heading-2 mb-6">About {destination.name}</h2>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                {destination.fullDescription}
              </p>
            </div>

            {/* Activities */}
            <div className="mb-16">
              <h2 className="heading-2 mb-8">Things to Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: 'var(--bg-card)' }}>
                    <CheckCircle size={24} style={{ color: 'var(--brand-dark)', flexShrink: 0 }} />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div className="mb-16">
              <h2 className="heading-2 mb-8">Tour Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destination.packages.map((pkg, index) => (
                  <div key={index} className="network-card p-6">
                    <h3 className="heading-3 mb-4" style={{ color: 'var(--brand-dark)' }}>
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
                      <Clock size={20} />
                      <span className="body-medium">{pkg.duration}</span>
                    </div>
                    <p className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-dark)' }}>
                      {pkg.price}
                    </p>
                    <Link to="/contact" className="btn-secondary w-full text-center">
                      Enquire Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="network-card p-8 md:p-12 text-center" style={{ background: 'var(--brand-dark)' }}>
              <Phone size={48} className="mx-auto mb-6" style={{ color: 'white' }} />
              <h3 className="heading-2 text-white mb-4">Ready to Explore {destination.name}?</h3>
              <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us now to customize your perfect {destination.name} experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`https://wa.me/919544254930?text=Hi%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20${destination.name}`}
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
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailPage;