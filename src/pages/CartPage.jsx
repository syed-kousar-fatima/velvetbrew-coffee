import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyCart from '../components/cart/EmptyCart';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { cartItems, cartTotal, totalItems } = useCart();

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-coffee-dark min-h-screen">
        <Container>
          <SectionHeading 
            subtitle="Your Selection" 
            title="Shopping Cart" 
            align="left"
          />

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
              <div className="lg:col-span-8 space-y-8">
                <div className="hidden md:grid grid-cols-4 pb-6 border-b border-white/5 text-[10px] uppercase tracking-[0.3em] text-cream/30 font-poppins">
                  <div className="col-span-2">Product Details</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Price</div>
                </div>
                {cartItems.map((item) => (
                  <div key={item.id} className="pb-8 border-b border-white/5">
                    <CartItem item={item} />
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4">
                <div className="glass-card p-8 border-gold/10 sticky top-32">
                  <h3 className="text-xl font-cormorant italic text-gold mb-8">Summary</h3>
                  <CartSummary />
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20">
              <EmptyCart />
            </div>
          )}
        </Container>
      </section>
    </PageTransition>
  );
};

export default CartPage;
