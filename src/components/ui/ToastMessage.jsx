import React from 'react';
import { motion } from 'framer-motion';

const ToastMessage = ({ message, type, onClose }) => {
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };

  const colors = {
    success: 'border-gold text-gold bg-espresso/90',
    error: 'border-red-500/50 text-red-500 bg-espresso/90',
    info: 'border-cream/20 text-cream bg-espresso/90'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className={`flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-md shadow-2xl ${colors[type]}`}
    >
      <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">
        {icons[type]}
      </span>
      <p className="font-poppins text-sm font-medium flex-1 tracking-wide">{message}</p>
      <button onClick={onClose} className="opacity-40 hover:opacity-100 transition-opacity">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

export default ToastMessage;
