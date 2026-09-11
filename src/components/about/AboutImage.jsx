import React from 'react';
import { motion } from 'framer-motion';

const AboutImage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
        <img 
          src="https://i.pinimg.com/736x/26/1b/59/261b5998a3af6ec0fc337a5f8cd52dec.jpg" 
          alt="Coffee Roasting Process" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent" />
      </div>

      <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-coffee-dark z-20 shadow-2xl hidden md:block">
        <img 
          src="https://i.pinimg.com/736x/b0/9f/44/b09f4458fd1c3666d952259e95e2641e.jpg" 
          alt="Latte Art" 
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 w-32 h-32 border border-gold/20 rounded-full border-dashed hidden lg:block"
      />
    </motion.div>
  );
};

export default AboutImage;
