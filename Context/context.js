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


export const Users = {
  loginuserid: 2,
};


export const UserContext = React.createContext(Users);
export const CartContext = React.createContext(cart);


