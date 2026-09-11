import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Midnight Espresso',
      category: 'Espresso',
      price: 350,
      image: '/assets/espresso.jpg',
      description: 'Double shot of our darkest roast for the pure connoisseur.',
      badge: 'Classic'
    },
    {
      id: 2,
      name: 'Velvet Cappuccino',
      category: 'Cappuccino',
      price: 450,
      image: '/assets/cappuccino.jpg',
      description: 'Creamy foam with a hint of cinnamon and artisanal chocolate.',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'Caramel Macchiato',
      category: 'Latte',
      price: 520,
      image: '/assets/latte.jpg',
      description: 'Layers of espresso and steamed milk with premium caramel drizzle.',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Nitro Cold Brew',
      category: 'Cold Coffee',
      price: 480,
      image: '/assets/cold-brew.jpg',
      description: 'Infused with nitrogen for a silky finish and natural sweetness.'
    },
    {
      id: 5,
      name: 'Tiramisu Delight',
      category: 'Desserts',
      price: 650,
      image: '/assets/tiramisu.jpg',
      description: 'Classic Italian coffee-flavored dessert with mascarpone cheese.'
    },
    {
      id: 6,
      name: 'Iced Vanilla Latte',
      category: 'Cold Coffee',
      price: 490,
      image: '/assets/iced-latte.jpg',
      description: 'Cold and refreshing vanilla goodness with single-origin beans.'
    }
  ]);

  const getProductById = (id) => products.find(p => p.id === parseInt(id));

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};
