import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-gold text-coffee-dark hover:bg-accent',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-coffee-dark',
    ghost: 'text-cream hover:bg-white/10',
    espresso: 'bg-espresso text-cream hover:bg-mocha border border-white/10'
  };

  return (
    <button 
      className={`px-8 py-3 rounded-full font-poppins font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
