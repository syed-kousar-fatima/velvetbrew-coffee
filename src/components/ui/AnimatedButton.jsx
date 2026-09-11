import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-gold text-coffee-dark',
    secondary: 'bg-espresso text-gold border border-white/10',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-coffee-dark'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-poppins font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
