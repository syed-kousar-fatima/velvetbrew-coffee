import React from 'react';

const OrderSummary = ({ items, subtotal }) => {
  const shipping = 40;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="glass-card p-8 border-gold/10 sticky top-32">
      <h4 className="text-xl font-cormorant italic text-gold mb-6">Order Summary</h4>
      <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 scrollbar-hide">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-cream text-xs font-poppins font-medium leading-tight">{item.name}</p>
                <p className="text-cream/40 text-[10px] uppercase tracking-tighter">Qty: {item.quantity}</p>
              </div>
            </div>
            <span className="text-cream font-bodoni text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-6 border-t border-white/5">
        <div className="flex justify-between text-xs font-poppins text-cream/60 uppercase tracking-widest">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs font-poppins text-cream/60 uppercase tracking-widest">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs font-poppins text-cream/60 uppercase tracking-widest">
          <span>GST (5%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-white/5">
          <span className="text-gold font-poppins text-sm uppercase tracking-[0.2em] font-bold">Total</span>
          <span className="text-gold font-bodoni text-2xl font-bold">₹{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 p-4 bg-espresso rounded-xl border border-white/5">
        <p className="text-[10px] text-cream/30 text-center font-poppins leading-relaxed">
          Prices include all applicable taxes. Your data is protected by industry-standard encryption.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
