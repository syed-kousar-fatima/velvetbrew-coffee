import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -10 }}
      className={`glass-card p-6 transition-all duration-500 hover:border-gold/30 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
