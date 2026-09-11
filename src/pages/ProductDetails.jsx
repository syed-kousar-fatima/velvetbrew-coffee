import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import RatingStars from '../components/common/RatingStars';
import { useCart } from '../hooks/useCart';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id,
    name: 'Midnight Espresso',
    price: 350,
    category: 'Espresso',
    rating: 5,
    description: 'A profound, dark roast with notes of smoked oak and dark chocolate. Sourced from the high-altitude peaks of Ethiopia, this blend is designed for the true coffee purist.',
    image: '/assets/espresso.jpg',
    details: [
      { label: 'Roast Level', value: 'Dark' },
      { label: 'Origin', value: 'Ethiopia' },
      { label: 'Notes', value: 'Oak, Chocolate' },
      { label: 'Body', value: 'Full' }
    ]
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-coffee-dark min-h-screen">
        <Container>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gold font-poppins text-xs uppercase tracking-widest mb-12 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Menu
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="text-gold font-poppins text-xs uppercase tracking-[0.4em] mb-4">{product.category}</span>
              <h1 className="text-5xl md:text-6xl font-cormorant italic text-cream mb-6">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <RatingStars rating={product.rating} />
                <span className="text-cream/40 font-poppins text-xs uppercase tracking-widest">48 Reviews</span>
              </div>

              <p className="text-gold font-bodoni text-3xl mb-8">₹{product.price.toFixed(2)}</p>
              
              <p className="text-cream/60 font-poppins leading-relaxed mb-10 text-lg">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {product.details.map((detail) => (
                  <div key={detail.label} className="border-b border-white/5 pb-4">
                    <p className="text-cream/30 text-[10px] uppercase tracking-widest mb-1">{detail.label}</p>
                    <p className="text-cream font-poppins text-sm">{detail.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center border border-white/10 rounded-full px-6 py-4 gap-8">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gold hover:text-accent transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </button>
                  <span className="text-cream font-poppins font-bold w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-gold hover:text-accent transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
                <Button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 py-4 text-sm tracking-widest uppercase"
                >
                  Add to Collection
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default ProductDetails;
