import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import FloatingCoffee from './FloatingCoffee';
import Container from '../common/Container';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0B08] pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#D4A373]/25 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FFB347]/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#3E2723]/40 rounded-full blur-[150px]" />
        
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`,
            backgroundRepeat: 'repeat'
          }} 
        />
      </div>

      <div className="absolute inset-0 z-[1]">
        <FloatingCoffee />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-poppins font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4A373] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
