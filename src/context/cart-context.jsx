import React, { useContext, createContext, useState } from 'react';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const itemInCart = cartData.length;

  return (
    <CartContext.Provider value={{ itemInCart, cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
