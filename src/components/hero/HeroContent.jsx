import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      <motion.span 
        variants={itemVariants}
        className="inline-block text-[#D4A373] font-poppins text-xs md:text-sm uppercase tracking-[0.4em] mb-6"
      >
        Premium Coffee Experience
      </motion.span>
      
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl 2k:text-9xl font-cormorant italic text-[#F8F3EE] leading-[1.1] mb-8"
      >
        Where Every Sip <br />
        <span className="text-[#D4A373]">Tells a Story.</span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-[#F8F3EE]/70 text-base md:text-lg font-poppins leading-relaxed mb-10 max-w-lg"
      >
        Indulge in the art of perfectly roasted beans and artisanal brewing. 
        Velvet Brew brings you a luxury coffee experience designed for the true connoisseur.
      </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap gap-5"
      >
        <Button 
          variant="primary" 
          className="px-10 py-4 text-sm tracking-widest uppercase"
          onClick={() => scrollToSection('menu')}
        >
          Explore Menu
        </Button>
        <Button 
          variant="outline" 
          className="px-10 py-4 text-sm tracking-widest uppercase"
          onClick={() => scrollToSection('about')}
        >
          Our Story
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
