import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex gap-4 group"
    >
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/5">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-cream font-cormorant italic text-lg leading-tight">{item.name}</h4>
            <p className="text-[10px] text-gold uppercase tracking-widest mt-1">{item.category}</p>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-cream/20 hover:text-red-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border border-white/10 rounded-full px-2 py-1 gap-3">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="text-cream/40 hover:text-gold transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-xs font-poppins text-cream w-4 text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="text-cream/40 hover:text-gold transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <span className="text-gold font-bodoni text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
