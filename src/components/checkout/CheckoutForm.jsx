import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BillingDetails from './BillingDetails';
import PaymentMethods from './PaymentMethods';
import OrderSummary from './OrderSummary';
import CheckoutSteps from './CheckoutSteps';
import Container from '../common/Container';
import { useCart } from '../../hooks/useCart';

const CheckoutForm = () => {
  const [step, setStep] = useState(1);
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [billingData, setBillingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });
  
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleFinalSubmit = () => {
    clearCart();
    setStep(3);
  };

  return (
    <section className="py-32 bg-coffee-dark min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          {step < 3 && <CheckoutSteps currentStep={step} />}
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
            <div className={step === 3 ? "lg:col-span-12" : "lg:col-span-8"}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="billing"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <BillingDetails 
                      data={billingData} 
                      setData={setBillingData} 
                      onNext={handleNext} 
                    />
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <PaymentMethods 
                      selected={paymentMethod} 
                      setSelected={setPaymentMethod} 
                      onNext={handleFinalSubmit}
                      onBack={handleBack}
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-12 text-center flex flex-col items-center gap-6"
                  >
                    <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                      <svg className="w-10 h-10 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-cormorant italic text-gold">Order Confirmed!</h2>
                    <p className="text-cream text-xl font-poppins">
                      Thank you for your purchase, Syed Kousar!
                    </p>
                    <blockquote className="text-cream/60 italic font-cormorant text-2xl max-w-lg border-l-2 border-gold pl-6 py-2">
                      “Where Every Sip Tells a Story.”
                    </blockquote>
                    <p className="text-cream/40 text-sm max-w-md">
                      Your artisanal coffee is being prepared with care and will be delivered to your doorstep shortly.
                    </p>
                    <button 
                      onClick={() => navigate('/')}
                      className="mt-8 bg-gold text-coffee-dark font-poppins font-bold uppercase tracking-widest py-4 px-12 rounded-xl hover:bg-accent transition-all duration-300"
                    >
                      Return to Home
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step < 3 && (
              <div className="lg:col-span-4">
                <OrderSummary items={cartItems} subtotal={cartTotal} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutForm;
