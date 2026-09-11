import React from 'react';
import { motion } from 'framer-motion';

const DiscountBadge = ({ text }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [-5, 5, -5]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="absolute top-6 left-6 z-10 w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center text-center p-2 shadow-2xl border-4 border-coffee-dark"
    >
      <span className="text-coffee-dark font-cinzel font-black text-xs md:text-sm leading-tight">
        {text}
      </span>
      
      <div className="absolute inset-0 border border-coffee-dark/20 rounded-full m-1 animate-ping opacity-20" />
    </motion.div>
  );
};

export default DiscountBadge;
