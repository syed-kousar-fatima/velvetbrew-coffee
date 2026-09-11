export const calculateCartTotal = (items) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 40;
  const gst = subtotal * 0.05;
  const total = subtotal + shipping + gst;

  return {
    subtotal,
    shipping,
    gst,
    total
  };
};
