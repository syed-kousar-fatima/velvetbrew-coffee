import React from 'react';

const Badge = ({ children, variant = 'gold', className = '' }) => {
  const variants = {
    gold: 'bg-gold/10 text-gold border-gold/20',
    mocha: 'bg-mocha text-latte border-mocha/20',
    accent: 'bg-accent text-coffee-dark border-accent/20'
  };

  return (
    <span className={`px-3 py-1 text-xs font-poppins font-semibold uppercase tracking-wider border rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
