import React from 'react';

const ProductBadge = ({ children }) => {
  return (
    <div className="absolute top-4 left-4 z-10">
      <span className="bg-gold text-coffee-dark px-4 py-1 rounded-full font-poppins text-[10px] font-bold uppercase tracking-widest shadow-lg">
        {children}
      </span>
    </div>
  );
};

export default ProductBadge;
