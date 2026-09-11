import React from 'react';
import { motion } from 'framer-motion';

const PaymentMethods = ({ selected, setSelected, onNext, onBack }) => {
  const methods = [
    { id: 'upi', name: 'UPI (GPay, PhonePe)', icon: '📱' },
    { id: 'card', name: 'Credit / Debit Card', icon: '💳' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
    { id: 'cod', name: 'Cash on Delivery', icon: '☕' }
  ];

  return (
    <div className="glass-card p-8 md:p-10">
      <h3 className="text-2xl font-cormorant italic text-cream mb-8">Payment Method</h3>
      <div className="space-y-4 mb-10">
        {methods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelected(method.id)}
            className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
              selected === method.id ? 'border-gold bg-gold/5' : 'border-white/5 bg-white/5 hover:border-white/10'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{method.icon}</span>
              <span className="text-cream font-poppins text-sm uppercase tracking-widest">{method.name}</span>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selected === method.id ? 'border-gold' : 'border-white/20'
            }`}>
              {selected === method.id && <div className="w-2.5 h-2.5 bg-gold rounded-full" />}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border border-white/10 text-cream font-poppins font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white/5 transition-colors">
          Back
        </button>
        <button onClick={onNext} className="flex-2 bg-gold text-coffee-dark font-poppins font-bold uppercase tracking-widest py-4 rounded-xl px-12 hover:bg-accent transition-colors">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
