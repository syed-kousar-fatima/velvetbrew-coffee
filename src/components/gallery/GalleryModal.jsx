import React from 'react';
import { motion } from 'framer-motion';

const GalleryModal = ({ image, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12"
    >
      <div 
        className="absolute inset-0 bg-coffee-dark/95 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-cream/50 hover:text-gold transition-colors flex items-center gap-2 group"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full bg-espresso p-2 rounded-2xl shadow-2xl overflow-hidden">
          <img 
            src={image.src} 
            alt={image.title} 
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          />
          <div className="p-6 text-center">
            <span className="text-gold font-poppins text-xs uppercase tracking-[0.3em] mb-2 block">
              {image.category}
            </span>
            <h3 className="text-3xl font-cormorant italic text-cream">
              {image.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryModal;
