const CART_STORAGE_KEY = 'velvet_brew_cart_data';

export const cartService = {
  getCart: () => {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveCart: (items) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  },

  calculateTotals: (items) => {
    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 40 : 0;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    return {
      subtotal,
      shipping,
      tax,
      total,
      currency: '₹'
    };
  },

  addToCart: (items, product, quantity) => {
    const existingItem = items.find(item => item.id === product.id);
    if (existingItem) {
      return items.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
    }
    return [...items, { ...product, quantity }];
  }
};
