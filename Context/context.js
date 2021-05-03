import React from 'react';
export const cart = {
  // products: [
  //   {
  //     productName: '',
  //     productQuantity: '',
  //     salesPrice: '',
  //   },
  // ],
  products: [],
  totalAmaount: 0,
};

export const CartContext = React.createContext(cart);
