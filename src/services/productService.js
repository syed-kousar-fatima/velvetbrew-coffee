import { products } from '../data/products';

export const productService = {
  getAllProducts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
  },

  getProductById: async (id) => {
    return new Promise((resolve) => {
      const product = products.find(p => p.id === parseInt(id));
      setTimeout(() => resolve(product), 300);
    });
  },

  getProductsByCategory: async (category) => {
    return new Promise((resolve) => {
      const filtered = category === 'All' 
        ? products 
        : products.filter(p => p.category === category);
      setTimeout(() => resolve(filtered), 400);
    });
  }
};
