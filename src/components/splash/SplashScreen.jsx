import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('drop');

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 800));
      setPhase('pour-milk');
      await new Promise(r => setTimeout(r, 1500));
      setPhase('pour-coffee');
      await new Promise(r => setTimeout(r, 1500));
      setPhase('heart');
      await new Promise(r => setTimeout(r, 1500));
      setPhase('rotate');
      await new Promise(r => setTimeout(r, 1000));
      setPhase('reveal');
      await new Promise(r => setTimeout(r, 2500));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  const milkParticles = Array.from({ length: 40 });
  const coffeeParticles = Array.from({ length: 40 });

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[1000] bg-[#0F0B08] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
          
          <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
            <AnimatePresence>
              {phase === 'pour-milk' && milkParticles.map((_, i) => (
                <motion.div
                  key={`milk-${i}`}
                  initial={{ y: 0, opacity: 0, x: 0 }}
                  animate={{ 
                    y: 200, 
                    opacity: [0, 1, 0],
                    x: (Math.random() - 0.5) * 30 
                  }}
                  transition={{ 
                    duration: 0.4, 
                    repeat: Infinity, 
                    delay: i * 0.02,
                    ease: "linear" 
                  }}
                  className="absolute w-1 h-1 bg-[#F8F3EE] rounded-sm"
                />
              ))}

              {phase === 'pour-coffee' && coffeeParticles.map((_, i) => (
                <motion.div
                  key={`coffee-${i}`}
                  initial={{ y: 0, opacity: 0, x: 0 }}
                  animate={{ 
                    y: 200, 
                    opacity: [0, 1, 0],
                    x: (Math.random() - 0.5) * 30 
                  }}
                  transition={{ 
                    duration: 0.4, 
                    repeat: Infinity, 
                    delay: i * 0.02,
                    ease: "linear" 
                  }}
                  className="absolute w-1 h-1 bg-[#3E2723] rounded-sm"
                />
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="relative z-20"
          >
            <motion.div
              animate={phase === 'rotate' ? { rotate: 360 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative"
            >
              <svg 
                viewBox="0 0 100 100" 
                className="w-24 h-24 md:w-32 md:h-32 fill-none stroke-[#D4A373]" 
                strokeWidth="2.5"
              >
                <path d="M20,40 Q20,80 50,80 Q80,80 80,40 L20,40 Z" />
                <path d="M80,45 Q92,45 92,55 Q92,65 80,65" strokeLinecap="round" />
                <path d="M15,85 Q50,92 85,85" strokeLinecap="round" />
                
                <AnimatePresence>
                  {(phase === 'pour-milk' || phase === 'pour-coffee' || phase === 'heart' || phase === 'rotate' || phase === 'reveal') && (
                    <g>
                      <motion.path
                        initial={{ d: "M25,45 Q50,45 75,45", opacity: 0 }}
                        animate={{ 
                          d: "M25,55 Q50,75 75,55", 
                          opacity: 1,
                          fill: (phase === 'pour-milk') ? "#F8F3EE" : "#3E2723"
                        }}
                        transition={{ duration: 0.5 }}
                        className="transition-colors duration-700"
                      />
                      
                      {(phase === 'heart' || phase === 'rotate' || phase === 'reveal') && (
                        <motion.path
                          initial={{ scale: 0, opacity: 0, y: 10 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, ease: "backOut" }}
                          d="M50,68 C45,63 35,63 35,53 C35,48 40,45 45,45 C47,45 49,46 50,48 C51,46 53,45 55,45 C60,45 65,48 65,53 C65,63 55,63 50,68 Z"
                          fill="#F8F3EE"
                        />
                      )}
                    </g>
                  )}
                </AnimatePresence>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 text-center h-24">
          <AnimatePresence>
            {phase === 'reveal' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#D4A373] tracking-tighter mb-2">
                  VELVET BREW
                </h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[#F8F3EE]/60 font-cormorant italic text-lg md:text-xl tracking-widest"
                >
                  “Where Every Sip Tells a Story.”
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 8, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-1 bg-[#D4A373]/30 origin-left"
      />
    </motion.div>
  );
};

export default SplashScreen;
