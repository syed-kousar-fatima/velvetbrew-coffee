import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className="relative px-6 py-2 group focus:outline-none"
        >
          <span className={`font-poppins text-xs md:text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
            activeCategory === category ? 'text-gold' : 'text-cream/40 group-hover:text-cream'
          }`}>
            {category}
          </span>
          {activeCategory === category && (
            <motion.div 
              layoutId="activeTab"
              className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
