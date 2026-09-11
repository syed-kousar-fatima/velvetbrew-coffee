import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Espresso', 'Cappuccino', 'Latte', 'Cold Coffee', 'Desserts'];

  return (
    <section id="menu" className="py-24 bg-coffee-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-0.5 pointer-events-none bg-[url('https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg')] bg-no-repeat bg-cover bg-center" />

      
      <Container className="relative z-10">
        <SectionHeading 
          subtitle="Discover Our Selection" 
          title="The Velvet Brew Menu" 
          align="center"
        />
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <ProductGrid activeCategory={activeCategory} />
      </Container>
    </section>
  );
};

export default MenuSection;
