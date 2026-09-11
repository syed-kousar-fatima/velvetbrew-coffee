import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const AboutContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8"
    >
      <h3 className="text-3xl md:text-4xl font-cormorant italic text-gold">
        The Art of Roasting, <br /> The Soul of Brewing.
      </h3>
      
      <p className="text-cream/70 font-poppins leading-relaxed text-lg">
        At Velvet Brew, we believe that coffee is more than just a beverage—it's an experience that awakens the senses. Our journey began with a simple passion for the finest beans sourced from the high-altitude estates of Ethiopia and Colombia.
      </p>

      <div className="space-y-4">
        {[
          'Hand-picked organic Arabica beans',
          'Small-batch roasting for peak freshness',
          'Expert baristas with 5+ years experience',
          'Sustainably sourced and ethically traded'
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform" />
            <span className="text-cream/80 font-poppins text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-6">
        <Button variant="outline" className="px-12">
          Read Our Full Story
        </Button>
      </div>
    </motion.div>
  );
};

export default AboutContent;
