import React, { useContext, createContext, useState, useEffect } from 'react';

import { useToken } from './context_index';
import { getWishlistData } from '../api-call/api-index';
const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const itemInWishlist = wishlistData.length;
  const { token } = useToken();
  useEffect(() => {
    if (token) {
      (async () => {
        const response = await getWishlistData(token);
        console.log(response);
      })();
    }
  }, []);

  return (
    <WishlistContext.Provider
      value={{ itemInWishlist, wishlistData, setWishlistData }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
