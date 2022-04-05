import React, { useContext, createContext, useState, useEffect } from 'react';
import { cardData } from '../data/cardData/cardData';
const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const itemInWishlist = wishlistData.length;

  useEffect(() => {
    setWishlistData(cardData.filter((item) => item.wishlist));
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
