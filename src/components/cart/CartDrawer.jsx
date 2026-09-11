import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import { useCart } from '../../hooks/useCart';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-coffee-dark/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-full max-w-md bg-espresso border-l border-white/10 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-cormorant italic text-cream">Your Selection</h2>
                <p className="text-[10px] uppercase tracking-widest text-gold">{totalItems} Items</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-cream/50 hover:text-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))
              ) : (
                <EmptyCart onClose={onClose} />
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 bg-coffee-dark/50 border-t border-white/5">
                <CartSummary onClose={onClose} />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
