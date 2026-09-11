import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import Newsletter from './Newsletter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      name: 'facebook',
      path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
      href: '#'
    },
    {
      name: 'instagram',
      path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01',
      extra: <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" fill="none" strokeWidth="2" />,
      href: '#'
    },
    {
      name: 'twitter',
      path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
      href: '#'
    }
  ];

  return (
    <footer className="bg-espresso border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[2560px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-2xl font-cinzel font-bold text-gold tracking-tighter">
                  VELVET BREW
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Luxury Coffee Shop
                </span>
              </div>
            </Link>
            <p className="text-cream/60 leading-relaxed max-w-xs font-poppins text-sm">
              “Where Every Sip Tells a Story.” Experience the finest artisanal coffee in an atmosphere of pure luxury.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:bg-gold hover:text-coffee-dark hover:border-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {social.extra}
                    <path d={social.path} fill={social.name === 'facebook' ? 'currentColor' : 'none'} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-cinzel text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-cream/60 hover:text-gold transition-colors text-sm font-poppins">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-cinzel text-lg mb-8 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-4 text-sm font-poppins text-cream/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-cream">08:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-cream">09:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cream">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-cinzel text-lg mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-cream/60 text-sm mb-6 font-poppins leading-relaxed">
              Subscribe to get latest updates and special offers.
            </p>
            <Newsletter />
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/40 text-xs font-poppins uppercase tracking-widest">
            © {currentYear} VELVET BREW. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-poppins uppercase tracking-widest text-cream/40">
            <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
