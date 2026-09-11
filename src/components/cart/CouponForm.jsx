import React, { useState } from 'react';

const CouponForm = () => {
  const [coupon, setCoupon] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    setCoupon('');
  };

  return (
    <form onSubmit={handleApply} className="relative">
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Promo Code"
        className="w-full bg-espresso border border-white/10 rounded-xl py-3 px-4 text-xs font-poppins text-cream focus:outline-none focus:border-gold transition-colors placeholder:text-cream/10"
      />
      <button 
        type="submit"
        className="absolute right-2 top-2 bottom-2 px-4 bg-white/5 text-gold rounded-lg font-poppins text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-coffee-dark transition-all duration-300"
      >
        Apply
      </button>
    </form>
  );
};

export default CouponForm;
