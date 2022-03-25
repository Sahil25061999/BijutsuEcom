import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const BuyButton = () => {
  return (
    <button className="card-buy-btn btn btn-black margin-r-10">Buy</button>
  );
};

const CartButton = () => {
  const [cartActiveState, setCartActiveState] = useState(false);
  const handleCartClick = () => {
    setCartActiveState(true);
  };
  return (
    <button
      onClick={handleCartClick}
      className={` btn  ${
        cartActiveState
          ? 'card-go-cart-btn btn-accented'
          : 'card-cart-btn btn-outline-black'
      }`}
    >
      {cartActiveState ? 'Go to Cart' : 'Cart'}
    </button>
  );
};

const WishlistButton = () => {
  const [wishlistActiveState, setWishlistActiveState] = useState(false);
  const handleWishlistClick = () => {
    setWishlistActiveState((prev) => !prev);
  };
  return (
    <button
      onClick={handleWishlistClick}
      className={`btn btn-only-icon wishlist-btn ${
        wishlistActiveState && 'wishlist-btn-active'
      }`}
    >
      <span className="fa-solid fa-heart"></span>
    </button>
  );
};

export { BuyButton, CartButton, WishlistButton };
