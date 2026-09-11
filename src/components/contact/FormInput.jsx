import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FormInput = ({ label, name, type = "text", value, onChange, error, placeholder, textarea = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gold font-poppins text-[10px] uppercase tracking-[0.3em] ml-1">
        {label}
      </label>
      <div className="relative group">
        {textarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows="5"
            className={`w-full bg-coffee-dark/50 border rounded-xl py-4 px-6 text-cream font-poppins text-sm transition-all duration-300 outline-none resize-none placeholder:text-cream/10 ${
              error ? 'border-red-500/50' : isFocused ? 'border-gold' : 'border-white/10 group-hover:border-white/20'
            }`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`w-full bg-coffee-dark/50 border rounded-xl py-4 px-6 text-cream font-poppins text-sm transition-all duration-300 outline-none placeholder:text-cream/10 ${
              error ? 'border-red-500/50' : isFocused ? 'border-gold' : 'border-white/10 group-hover:border-white/20'
            }`}
          />
        )}
        
        <motion.div 
          initial={false}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gold origin-left"
        />
      </div>
      {error && (
        <span className="text-[10px] text-red-500/80 font-poppins uppercase tracking-wider ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
