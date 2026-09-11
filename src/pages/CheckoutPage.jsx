import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import CheckoutForm from '../components/checkout/CheckoutForm';

const CheckoutPage = () => {
  return (
    <PageTransition>
      <CheckoutForm />
    </PageTransition>
  );
};

export default CheckoutPage;
