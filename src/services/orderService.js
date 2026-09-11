export const orderService = {
  placeOrder: async (orderData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.05;
        if (isSuccess) {
          const orderId = `VB-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
          resolve({
            success: true,
            orderId,
            message: 'Order placed successfully',
            timestamp: new Date().toISOString()
          });
        } else {
          reject({
            success: false,
            message: 'Payment processing failed. Please try again.'
          });
        }
      }, 2000);
    });
  },

  getOrderHistory: async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'VB-982341',
            date: '2026-09-11',
            total: 1247.50,
            status: 'Delivered'
          }
        ]);
      }, 1000);
    });
  }
};
