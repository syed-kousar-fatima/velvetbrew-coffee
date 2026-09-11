import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/common/Container';

const NotFound = () => {
  return (
    <PageTransition>
      <section className="h-screen bg-coffee-dark flex items-center justify-center text-center px-6">
        <Container>
          <div className="relative">
            <h1 className="text-[10rem] md:text-[15rem] font-bodoni text-gold/10 leading-none select-none">404</h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-cormorant italic text-cream mb-6">Spilled Coffee</h2>
              <p className="text-cream/40 font-poppins text-sm md:text-lg max-w-md mb-10 leading-relaxed">
                The page you are looking for has been moved or doesn't exist. Let's get you back to a fresh cup.
              </p>
              <Link to="/">
                <button className="bg-gold text-coffee-dark px-12 py-4 rounded-full font-poppins font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300">
                  Return to Home
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default NotFound;
