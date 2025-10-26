import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Plane } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--accent-dark)', color: 'white' }} className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                }}
              >
                <Plane size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  StayWayanad
                </div>
                <div className="text-sm font-medium text-white/70">
                  Holidays
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Crafting personalized journeys that exceed expectations since 2010. Your dream vacation starts here.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919544254930"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/houseboats" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Houseboats
                </Link>
              </li>
              <li>
                <Link to="/ayurveda" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Ayurveda & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/destination/wayanad" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Wayanad
                </Link>
              </li>
              <li>
                <Link to="/destination/munnar" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Munnar
                </Link>
              </li>
              <li>
                <Link to="/destination/alappuzha" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Alappuzha
                </Link>
              </li>
              <li>
                <Link to="/destination/kovalam" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Kovalam
                </Link>
              </li>
              <li>
                <Link to="/destination/goa" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/70 group-hover:bg-white transition-all"></span>
                  Goa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-white/70" />
                <span className="text-white/70 text-sm">
                  Wayanad, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-white/70" />
                <a href="tel:+919544254930" className="text-white/70 hover:text-white transition-colors text-sm">
                  +91 95442 54930
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-white/70" />
                <a href="mailto:info@staywayanad.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@staywayanad.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} StayWayanad Holidays. All Rights Reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;