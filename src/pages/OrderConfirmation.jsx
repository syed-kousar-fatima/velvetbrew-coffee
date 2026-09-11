import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import OrderSuccess from '../components/order/OrderSuccess';

const OrderConfirmation = () => {
  return (
    <PageTransition>
      <OrderSuccess />
    </PageTransition>
  );
};

export default OrderConfirmation;
