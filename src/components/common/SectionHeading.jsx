import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className = '' 
}) => {
  const alignment = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 max-w-2xl ${alignment[align]} ${className}`}>
      {subtitle && (
        <span className="text-gold font-poppins tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-cormorant italic text-cream leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gold mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
