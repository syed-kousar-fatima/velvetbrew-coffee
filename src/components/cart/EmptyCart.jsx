import React from 'react';
import { motion } from 'framer-motion';

const EmptyCart = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-24 h-24 bg-gold/5 rounded-full flex items-center justify-center mb-6"
      >
        <svg className="w-10 h-10 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </motion.div>
      <h3 className="text-2xl font-cormorant italic text-cream mb-2">Your cart is empty</h3>
      <p className="text-cream/40 font-poppins text-xs leading-relaxed mb-8">
        It looks like you haven't discovered your perfect blend yet. 
        Explore our menu to find your next favorite story.
      </p>
      <button 
        onClick={onClose}
        className="text-gold font-poppins text-[10px] uppercase tracking-[0.3em] border-b border-gold/30 pb-1 hover:border-gold transition-colors"
      >
        Start Browsing
      </button>
    </div>
  );
};

export default EmptyCart;
