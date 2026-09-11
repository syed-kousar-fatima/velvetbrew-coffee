import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';

const ProductQuickView = ({ product, onClose, onOpenCart }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    // Convert price string like "₹350" to number
    const numericPrice = typeof product.price === 'number' 
      ? product.price 
      : parseFloat(product.price.toString().replace(/[^0-9.]/g, '')) || 0;

    addToCart({ ...product, price: numericPrice }, 1);
    onClose();
    if (onOpenCart) onOpenCart();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-coffee-dark/90 backdrop-blur-md"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-espresso border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-cream/50 hover:text-gold transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-gold font-poppins text-xs uppercase tracking-[0.3em] mb-4 block">
                {product.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-cormorant italic text-cream mb-4">
                {product.name}
              </h2>
              <p className="text-gold font-bodoni text-2xl mb-8">{product.price}</p>
              <p className="text-cream/60 font-poppins leading-relaxed mb-10">
                {product.desc || product.description} Our beans are ethically sourced and roasted in small batches to ensure the most elegant flavor profile for your palate.
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gold text-coffee-dark py-4 rounded-full font-poppins font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 active:scale-95"
                >
                  Add to Cart
                </button>
                <button className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductQuickView;
