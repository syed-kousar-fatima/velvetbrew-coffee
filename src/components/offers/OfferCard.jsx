import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import CountdownTimer from './CountdownTimer';
import DiscountBadge from './DiscountBadge';

const OfferCard = ({ offer }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col md:flex-row bg-coffee-dark border border-white/5 rounded-[2rem] overflow-hidden hover:border-gold/30 transition-all duration-500"
    >
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-coffee-dark via-transparent to-transparent" />
        <DiscountBadge text={offer.discount} />
      </div>

      <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
        <span className="text-gold font-poppins text-[10px] uppercase tracking-[0.4em] mb-4">
          {offer.tag}
        </span>
        <h3 className="text-3xl font-cormorant italic text-cream mb-4">
          {offer.title}
        </h3>
        <p className="text-cream/60 font-poppins text-sm leading-relaxed mb-8">
          {offer.description}
        </p>
        
        <div className="mb-8">
          <p className="text-cream/30 text-[10px] uppercase tracking-widest mb-3">Offer ends in:</p>
          <CountdownTimer targetTime={offer.endTime} />
        </div>

        <Button variant="outline" className="w-fit px-8 py-3 text-xs tracking-[0.2em] uppercase group-hover:bg-gold group-hover:text-coffee-dark">
          Claim Offer
        </Button>
      </div>
    </motion.div>
  );
};

export default OfferCard;
