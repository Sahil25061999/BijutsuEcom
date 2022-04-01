import React, { useContext, createContext, useState, useEffect } from 'react';

import { cardData } from '../data/cardData/cardData';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const itemInCart = cartData.length;

  useEffect(() => {
    setCartData(cardData.filter((item) => item.cart));
  }, []);

  return (
    <CartContext.Provider value={{ itemInCart, cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
