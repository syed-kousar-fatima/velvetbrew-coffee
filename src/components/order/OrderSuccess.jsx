import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SuccessAnimation from './SuccessAnimation';
import OrderDetails from './OrderDetails';

const OrderSuccess = () => {
  return (
    <section className="min-h-screen bg-coffee-dark py-32 flex items-center">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <SuccessAnimation />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-cormorant italic text-gold mb-4">
              Thank You, Syed Kousar!
            </h1>
            <p className="text-cream/60 font-poppins text-sm md:text-base tracking-widest uppercase">
              Your order has been placed successfully.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="w-full"
          >
            <OrderDetails />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <Link to="/">
              <button className="bg-gold text-coffee-dark px-10 py-4 rounded-full font-poppins font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300">
                Back to Home
              </button>
            </Link>
            <button className="border border-white/10 text-cream px-10 py-4 rounded-full font-poppins font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300">
              Download Invoice
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OrderSuccess;
