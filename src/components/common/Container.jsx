import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto px-4 sm:px-8 md:px-12 lg:px-24 2k:px-0 max-w-[2560px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
