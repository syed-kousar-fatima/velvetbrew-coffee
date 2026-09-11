export const generateOrderId = () => {
  const prefix = 'VB';
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomStr = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${prefix}-${timestamp}-${randomStr}`;
};
