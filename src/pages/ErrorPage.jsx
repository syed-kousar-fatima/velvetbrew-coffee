import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/common/Container';

const ErrorPage = () => {
  return (
    <PageTransition>
      <section className="h-screen bg-coffee-dark flex items-center justify-center text-center px-6">
        <Container>
          <div className="glass-card p-12 max-w-2xl mx-auto border-red-500/20">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-cormorant italic text-cream mb-4">Something went wrong</h2>
            <p className="text-cream/40 font-poppins text-sm mb-10 leading-relaxed">
              We encountered an unexpected error while brewing your request. Please try refreshing the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-cream text-coffee-dark px-10 py-4 rounded-full font-poppins font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300"
            >
              Reload Page
            </button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default ErrorPage;
