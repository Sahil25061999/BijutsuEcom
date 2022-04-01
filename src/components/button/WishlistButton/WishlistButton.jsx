import React, { useState } from 'react';
import { useWishlist } from '../../../context/wishlist-context';
import { cardData } from '../../../data/cardData/cardData';
import './WishlistButton.css';

export const WishlistButton = ({ id, wishlistState, fromHorizon }) => {
  const [wishlistActiveState, setWishlistActiveState] = useState(wishlistState);
  const { setWishlistData } = useWishlist();

  const handleWishlistClick = () => {
    // changes the button style
    setWishlistActiveState(!wishlistActiveState);
    // changes the wishlist from false to true and vice-versa for the clicked product.
    for (const item of cardData) {
      if (item.id === id) {
        item.wishlist = !item.wishlist;
        break;
      }
    }
    //updates the data to be displayed in wishlist page

    setWishlistData([...cardData.filter((item) => item.wishlist)]);
  };

  return fromHorizon ? (
    <button
      onClick={handleWishlistClick}
      className="card-go-cart-btn btn btn-accented"
    >
      {wishlistActiveState ? 'Remove From wishlist' : 'Add to Wishlist'}
    </button>
  ) : (
    <button
      onClick={handleWishlistClick}
      className={`btn btn-only-icon wishlist-btn ${
        wishlistActiveState && 'wishlist-btn-active'
      }`}
    >
      <span className="fa-solid fa-heart wishlist-btn-icon"></span>
    </button>
  );
};
