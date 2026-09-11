import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ image, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5"
    >
      <div className="relative overflow-hidden aspect-auto">
        <img 
          src={image.src} 
          alt={image.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-coffee-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
          <motion.span 
            initial={{ y: 10, opacity: 0 }}
            whileInHover={{ y: 0, opacity: 1 }}
            className="text-gold font-poppins text-[10px] uppercase tracking-[0.4em] mb-2"
          >
            {image.category}
          </motion.span>
          <motion.h4 
            initial={{ y: 10, opacity: 0 }}
            whileInHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-cream font-cormorant italic text-2xl"
          >
            {image.title}
          </motion.h4>
          
          <div className="mt-6 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-coffee-dark transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
