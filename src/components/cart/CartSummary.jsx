import React from 'react';
import { useNavigate } from 'react-router-dom';
import CouponForm from './CouponForm';
import { useCart } from '../../hooks/useCart';

const CartSummary = ({ onClose }) => {
  const { cartTotal } = useCart();
  const navigate = useNavigate();
  const shipping = 40.00;
  const total = cartTotal + shipping;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="space-y-6">
      <CouponForm />
      
      <div className="space-y-3 pt-4">
        <div className="flex justify-between text-sm font-poppins">
          <span className="text-cream/40 uppercase tracking-widest">Subtotal</span>
          <span className="text-cream">₹{cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm font-poppins">
          <span className="text-cream/40 uppercase tracking-widest">Shipping</span>
          <span className="text-cream">₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-white/5">
          <span className="text-gold font-poppins text-xs uppercase tracking-[0.2em] font-bold">Total</span>
          <span className="text-gold font-bodoni text-xl">₹{total.toFixed(2)}</span>
        </div>
      </div>

      <button 
        onClick={handleCheckout}
        className="w-full bg-gold text-coffee-dark font-poppins font-bold uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-accent transition-all duration-300 active:scale-[0.98]"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
