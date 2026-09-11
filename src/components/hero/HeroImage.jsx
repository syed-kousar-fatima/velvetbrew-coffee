import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroImage = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const coffeeImages = [
    "https://i.pinimg.com/736x/46/b0/37/46b0373b95f82df319e149db39891600.jpg",
    "https://i.pinimg.com/736x/49/98/18/4998188c2739d78ebba355c44635dec5.jpg",
    "https://i.pinimg.com/736x/ec/b4/14/ecb41449333d531f3d6f9bba33c73f04.jpg",
    "https://i.pinimg.com/1200x/28/bc/35/28bc352ca1546d67a2180232022dfb46.jpg",
    "https://i.pinimg.com/736x/ab/a1/13/aba113a097178db6672cbb82b846c5ee.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % coffeeImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [coffeeImages.length]);

  const handleImageClick = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIndex((prev) => (prev + 1) % coffeeImages.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] 2k:max-w-[700px] aspect-square">
        <div className="absolute inset-0 bg-[#D4A373]/5 rounded-full blur-3xl animate-pulse" />
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative z-10 w-full h-full cursor-pointer"
          onClick={handleImageClick}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-b-[120px] sm:rounded-b-[160px] rounded-t-2xl overflow-hidden border-x-[8px] sm:border-x-[12px] border-b-[8px] sm:border-b-[12px] border-[#D4A373]/20 shadow-2xl bg-[#1B1410]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={index}
                  src={coffeeImages[index]} 
                  alt="Signature Velvet Brew Latte" 
                  initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://i.pinimg.com/736x/c2/ba/27/c2ba279ae3b8e8880303da34108fa3f0.jpg";
                  }}
                />
              </AnimatePresence>
            </div>
            
            <div className="absolute top-[20%] -right-8 sm:-right-12 w-20 sm:w-28 h-28 sm:h-40 border-[8px] sm:border-[12px] border-[#D4A373]/20 rounded-[2.5rem] sm:rounded-[4rem] -z-10" />
            
            <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-[110%] sm:w-[120%] h-6 sm:h-8 bg-[#D4A373]/5 blur-md rounded-[100%]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -right-4 sm:-right-8 top-1/4 bg-[#1B1410]/90 backdrop-blur-md border border-[#D4A373]/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl hidden md:block z-20"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D4A373]/20 flex items-center justify-center">
              <span className="text-[#D4A373] text-[10px] sm:text-xs">★</span>
            </div>
            <div>
              <p className="text-[#F8F3EE] text-[10px] sm:text-xs font-bold font-poppins">4.9 Rating</p>
              <p className="text-[#F8F3EE]/50 text-[8px] sm:text-[10px] uppercase tracking-tighter">1k+ Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
