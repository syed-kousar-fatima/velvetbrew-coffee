import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
