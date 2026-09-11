import React from 'react';

const OrderDetails = () => {
  const orderInfo = {
    id: "#VB-982341",
    date: "September 11, 2026",
    method: "UPI (Google Pay)",
    items: [
      { name: "Midnight Espresso", qty: 2, price: 350 },
      { name: "Velvet Cappuccino", qty: 1, price: 450 }
    ],
    subtotal: 1150,
    shipping: 40,
    tax: 57.5,
    total: 1247.5
  };

  return (
    <div className="glass-card border-white/5 p-8 md:p-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-white/5">
        <div>
          <p className="text-gold font-poppins text-[10px] uppercase tracking-[0.3em] mb-2">Order ID</p>
          <p className="text-cream font-bodoni text-xl">{orderInfo.id}</p>
        </div>
        <div>
          <p className="text-gold font-poppins text-[10px] uppercase tracking-[0.3em] mb-2">Order Date</p>
          <p className="text-cream font-bodoni text-xl">{orderInfo.date}</p>
        </div>
      </div>

      <div className="space-y-6 mb-10">
        <p className="text-gold font-poppins text-[10px] uppercase tracking-[0.3em]">Items Ordered</p>
        {orderInfo.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-cream/40 font-bodoni italic">0{idx + 1}</span>
              <div>
                <p className="text-cream font-poppins text-sm">{item.name}</p>
                <p className="text-cream/30 text-[10px] uppercase tracking-widest">Qty: {item.qty}</p>
              </div>
            </div>
            <span className="text-cream font-bodoni">₹{(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-8 border-t border-white/5">
        <div className="flex justify-between text-xs font-poppins text-cream/40 uppercase tracking-widest">
          <span>Subtotal</span>
          <span>₹{orderInfo.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs font-poppins text-cream/40 uppercase tracking-widest">
          <span>Shipping</span>
          <span>₹{orderInfo.shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs font-poppins text-cream/40 uppercase tracking-widest">
          <span>GST (5%)</span>
          <span>₹{orderInfo.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-6 mt-2">
          <span className="text-gold font-poppins text-sm uppercase tracking-[0.4em] font-bold">Grand Total</span>
          <span className="text-gold font-bodoni text-3xl font-bold">₹{orderInfo.total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-10 flex items-center gap-3 bg-espresso/50 p-4 rounded-xl border border-white/5">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <p className="text-[10px] text-cream/60 font-poppins uppercase tracking-widest">
          Payment via {orderInfo.method} Confirmed
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
