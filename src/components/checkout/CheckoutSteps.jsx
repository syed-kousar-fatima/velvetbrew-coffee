import React from 'react';

const CheckoutSteps = ({ currentStep }) => {
  const steps = ['Shipping', 'Payment', 'Confirmation'];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;

        return (
          <React.Fragment key={step}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-poppins text-xs transition-all duration-500 ${
                isActive ? 'bg-gold text-coffee-dark' : isCompleted ? 'bg-accent text-coffee-dark' : 'bg-white/5 text-cream/40 border border-white/10'
              }`}>
                {isCompleted ? '✓' : stepNum}
              </div>
              <span className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-poppins transition-colors duration-500 ${
                isActive ? 'text-gold' : 'text-cream/40'
              }`}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block w-12 lg:w-24 h-[1px] bg-white/10" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;
