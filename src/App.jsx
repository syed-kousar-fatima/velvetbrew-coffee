import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProductProvider } from './context/ProductContext';
import { ToastProvider } from './components/ui/ToastProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import SplashScreen from './components/splash/SplashScreen';
import CartDrawer from './components/cart/CartDrawer';
import BackToTop from './components/common/BackToTop';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <ToastProvider>
            <Router>
              <AnimatePresence mode="wait">
                {loading ? (
                  <SplashScreen key="splash" onComplete={() => setLoading(false)} />
                ) : (
                  <div className="flex flex-col min-h-screen bg-coffee-dark">
                    <Navbar onOpenCart={() => setIsCartOpen(true)} />
                    <main className="flex-grow">
                      <AppRoutes />
                    </main>
                    <Footer />
                    <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                    <BackToTop />
                  </div>
                )}
              </AnimatePresence>
            </Router>
          </ToastProvider>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
