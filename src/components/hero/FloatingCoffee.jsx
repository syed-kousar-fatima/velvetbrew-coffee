import React from 'react';
import { motion } from 'framer-motion';

const FloatingCoffee = () => {
  const beans = [
    { id: 1, top: '15%', left: '10%', size: 'w-8 md:w-10', delay: 0, duration: 8 },
    { id: 2, top: '65%', left: '5%', size: 'w-12 md:w-14', delay: 1, duration: 10 },
    { id: 3, top: '20%', left: '85%', size: 'w-10 md:w-12', delay: 0.5, duration: 9 },
    { id: 4, top: '80%', left: '90%', size: 'w-6 md:w-8', delay: 2, duration: 7 },
    { id: 5, top: '40%', left: '45%', size: 'w-5 md:w-6', delay: 1.5, duration: 11 },
    { id: 6, top: '30%', left: '75%', size: 'w-7 md:w-9', delay: 2.5, duration: 12 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0],
            y: [0, -100, -200, -300],
            x: [0, 50, -50, 0],
            rotate: [0, 180, 360],
            scale: [0.5, 1.2, 1.2, 0.8]
          }}
          transition={{ 
            duration: bean.duration, 
            repeat: Infinity, 
            delay: bean.delay,
            ease: "easeInOut"
          }}
          className={`absolute ${bean.top} ${bean.left} ${bean.size} z-10`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="text-[#D4A373] fill-current drop-shadow-[0_0_10px_rgba(212,163,115,0.5)]">
            <path d="M12 2C7.58 2 4 5.58 4 10C4 14.42 7.58 18 12 18C16.42 18 20 14.42 20 10C20 5.58 16.42 2 12 2ZM12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16Z" />
          </svg>
        </motion.div>
      ))}

      <div className="absolute top-0 left-0 w-full h-full z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            animate={{ 
              y: [0, -700],
              x: [0, i % 2 === 0 ? 120 : -120],
              opacity: [0, 0.4, 0],
              scale: [1, 4],
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute bottom-[-20%] left-[20%] md:left-[50%] w-64 h-[500px] bg-gradient-to-t from-[#D4A373]/20 via-[#F8F3EE]/10 to-transparent blur-[120px] rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingCoffee;
