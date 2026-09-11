import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-coffee-dark flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-mocha rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
