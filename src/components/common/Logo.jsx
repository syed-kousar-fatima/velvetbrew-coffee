import React from 'react';

const Logo = ({ className = "w-10 h-10", color = "#D4A373" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 40C20 40 20 75 50 75C80 75 80 40 20 40Z" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinejoin="round"
      />
      <path 
        d="M80 48C88 48 92 52 92 58C92 64 88 68 80 68" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round"
      />
      <path 
        d="M10 85C30 92 70 92 90 85" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round"
      />
      <path d="M40 28Q35 20 40 12" stroke={color} strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
      <path d="M52 25Q47 17 52 9" stroke={color} strokeWidth="2" strokeLinecap="round" className="animate-pulse delay-75" />
      <path d="M64 28Q59 20 64 12" stroke={color} strokeWidth="2" strokeLinecap="round" className="animate-pulse delay-150" />
    </svg>
  );
};

export default Logo;
