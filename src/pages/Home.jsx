import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import MenuSection from '../components/menu/MenuSection';
import SpecialOffers from '../components/offers/SpecialOffers';
import Gallery from '../components/gallery/Gallery';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <MenuSection />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <Contact />
    </PageTransition>
  );
};

export default Home;
