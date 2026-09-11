import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductQuickView from './ProductQuickView';

const products = [
  { id: 1, name: 'Midnight Espresso', category: 'Espresso', price: '₹350', image: 'https://i.pinimg.com/736x/29/2b/42/292b42e53ddb5d550e82c064d32f19ad.jpg', desc: 'Double shot of our darkest roast.', badge: 'Classic' },
  { id: 2, name: 'Velvet Cappuccino', category: 'Cappuccino', price: '₹450', image: 'https://i.pinimg.com/1200x/33/44/2e/33442e58a74503c7cef4fc437a4ebc8e.jpg', desc: 'Creamy foam with a hint of cinnamon.', badge: 'Popular' },
  { id: 3, name: 'Caramel Macchiato', category: 'Latte', price: '₹520', image: 'https://i.pinimg.com/1200x/7f/7c/0a/7f7c0a441577459d9a0a01ee28b59cc5.jpg', desc: 'Layers of espresso and steamed milk.', badge: 'New' },
  { id: 4, name: 'Nitro Cold Brew', category: 'Cold Coffee', price: '₹480', image: 'https://i.pinimg.com/1200x/83/e7/87/83e7877f45bb9c0e0201cb3ccab91769.jpg', desc: 'Infused with nitrogen for a silky finish.' },
  { id: 5, name: 'Tiramisu Delight', category: 'Desserts', price: '₹650', image: 'https://i.pinimg.com/736x/40/1f/57/401f57256622cddcee53dad1477c2472.jpg', desc: 'Classic Italian coffee-flavored dessert.' },
  { id: 6, name: 'Iced Vanilla Latte', category: 'Cold Coffee', price: '₹490', image: 'https://i.pinimg.com/736x/d2/f2/78/d2f278191058565de16553f29b9352fd.jpg', desc: 'Cold and refreshing vanilla goodness.' }
];

const ProductGrid = ({ activeCategory }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={() => setSelectedProduct(product)}
            />
          ))}
        </AnimatePresence>
      </div>

      <ProductQuickView 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  );
};

export default ProductGrid;
