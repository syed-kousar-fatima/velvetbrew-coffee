import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import { useCart } from '../../hooks/useCart';

const Navbar = ({ onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'hero' },
    { name: 'About', path: 'about' },
    { name: 'Menu', path: 'menu' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-coffee-dark/90 backdrop-blur-xl border-b border-white/5 py-3 md:py-4 2k:py-8' 
            : 'bg-transparent py-5 md:py-8 2k:py-12'
        }`}
      >
        <div className="max-w-[2560px] mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 group shrink-0"
          >
            <Logo className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 2k:w-20 2k:h-20 transition-transform duration-500 group-hover:rotate-12" />
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg md:text-2xl 2k:text-5xl font-cinzel font-bold text-gold tracking-tighter leading-none">
                VELVET BREW
              </span>
              <span className="text-[7px] sm:text-[9px] md:text-[10px] 2k:text-lg uppercase tracking-[0.3em] text-cream/60 mt-0.5">
                Luxury Coffee
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12 2k:gap-24">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                className="font-poppins text-[11px] xl:text-xs 2k:text-2xl uppercase tracking-widest text-cream/80 hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 2k:gap-16">
            <button 
              onClick={onOpenCart}
              className="relative p-1.5 md:p-2 text-gold hover:text-accent transition-all duration-300 group"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 2k:w-12 2k:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-coffee-dark text-[8px] md:text-[10px] 2k:text-lg font-bold w-4 h-4 md:w-5 md:h-5 2k:w-8 2k:h-8 rounded-full flex items-center justify-center border-2 border-coffee-dark">
                  {totalItems}
                </span>
              )}
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:block px-5 py-2 md:px-8 md:py-3 2k:px-16 2k:py-6 border border-gold text-gold font-poppins text-[9px] md:text-[10px] lg:text-xs 2k:text-xl font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-coffee-dark transition-all duration-500"
            >
              Book a Table
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1 md:gap-1.5 p-1.5"
            >
              <span className="w-6 h-0.5 md:w-8 md:h-0.5 2k:w-14 2k:h-1 bg-gold" />
              <span className="w-6 h-0.5 md:w-8 md:h-0.5 2k:w-14 2k:h-1 bg-gold" />
              <span className="w-4 h-0.5 md:w-5 md:h-0.5 2k:w-10 2k:h-1 bg-gold self-end" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        links={navLinks} 
        onLinkClick={scrollToSection}
      />
    </>
  );
};

export default Navbar;
