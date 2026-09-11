import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import ProductBadge from './ProductBadge';

const ProductCard = forwardRef(({ product, onQuickView }, ref) => {
  const price = typeof product.price === 'number' 
    ? product.price 
    : parseFloat(product.price?.toString().replace(/[^0-9.]/g, '')) || 0;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-espresso border border-white/5 rounded-3xl p-5 hover:border-gold/30 hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500" />
        
        {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
        
        <div className="absolute bottom-4 left-0 w-full px-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button 
            onClick={onQuickView}
            className="w-full bg-cream text-coffee-dark py-3 rounded-xl font-poppins text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl md:text-2xl font-cormorant italic text-cream">{product.name}</h3>
        <span className="text-gold font-bodoni text-lg">₹{price.toFixed(2)}</span>
      </div>
      
      <p className="text-cream/50 text-sm font-poppins line-clamp-2 leading-relaxed">
        {product.desc || product.description}
      </p>

      <button className="mt-6 flex items-center gap-2 text-gold font-poppins text-xs uppercase tracking-[0.2em] group/btn">
        <span>Add to Cart</span>
        <div className="w-6 h-[1px] bg-gold group-hover/btn:w-10 transition-all duration-300" />
      </button>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
