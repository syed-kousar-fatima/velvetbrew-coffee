import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <div 
      className={`fixed inset-0 z-[200] transition-all duration-700 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div 
        className={`absolute inset-0 bg-coffee-dark/95 backdrop-blur-xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-sm bg-espresso border-l border-white/10 p-12 flex flex-col transition-transform duration-500 ease-expo ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={onClose}
          className="self-end p-2 text-gold hover:rotate-90 transition-transform duration-300"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-20 flex flex-col gap-8">
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={`text-4xl font-cormorant italic text-cream hover:text-gold transition-colors ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-12 border-t border-white/10">
          <p className="text-gold font-cinzel text-xl mb-4">VELVET BREW</p>
          <p className="text-cream/50 text-sm leading-relaxed">
            123 Espresso Street, Coffee City<br />
            +1 (234) 567-890<br />
            hello@velvetbrew.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
