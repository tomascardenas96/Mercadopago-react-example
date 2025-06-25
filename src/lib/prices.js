export const subtotal = (products) =>
  products.reduce((sum, product) => sum + product.price * product.quantity, 0);

export const tax = subtotal * 0.21; // 21% IVA

export const total = subtotal + tax;
