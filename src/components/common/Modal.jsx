import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-coffee-dark/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-espresso border border-white/10 rounded-2xl p-8 shadow-2xl animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-cream/50 hover:text-cream transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {title && <h3 className="text-2xl font-cormorant italic text-gold mb-6">{title}</h3>}
        <div className="text-cream/80">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
