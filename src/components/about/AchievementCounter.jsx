import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../common/Counter';

const AchievementCounter = () => {
  const achievements = [
    { label: 'Years Experience', value: 10, suffix: '+' },
    { label: 'Coffee Varieties', value: 50, suffix: '+' },
    { label: 'Happy Customers', value: 1, suffix: 'K+' },
    { label: 'Expert Baristas', value: 15, suffix: '' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="glass-card p-8 text-center group hover:border-gold/30 transition-colors"
        >
          <div className="mb-2">
            <Counter end={item.value} suffix={item.suffix} />
          </div>
          <p className="text-cream/50 font-poppins uppercase tracking-[0.2em] text-[10px] md:text-xs">
            {item.label}
          </p>
          <div className="w-8 h-[1px] bg-gold/20 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementCounter;
