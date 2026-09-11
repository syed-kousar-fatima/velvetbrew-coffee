import React from 'react';
import { motion } from 'framer-motion';

const SuccessAnimation = () => {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#D4A373"
          strokeWidth="2"
          fill="none"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" }
            }
          }}
        />
        
        <motion.path
          d="M30 52L43 65L70 38"
          stroke="#D4A373"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
            }
          }}
        />
        
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="#D4A373"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0],
            scale: [1, 1.2, 1.3]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 1.4,
            ease: "easeOut"
          }}
        />
      </motion.svg>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-4 bg-gold rounded-full"
            style={{ rotate: `${i * 45}deg`, translateY: -40 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
              translateY: [-40, -70]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessAnimation;
