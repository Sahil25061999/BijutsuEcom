import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/cart-context';

import { cardData } from '../../../data/cardData/cardData';

export const CartButton = ({ cartState, id }) => {
  const [cartBtnActiveState, setCartBtnActiveState] = useState(cartState);
  const { setCartData } = useCart();
  const handleCartClick = () => {
    setCartBtnActiveState(true);
    for (const item of cardData) {
      if (item.id === id) {
        item.cart = !item.cart;

        break;
      }
    }
    //updates the data to be displayed in cart page

    setCartData([...cardData.filter((item) => item.cart)]);
  };

  return cartBtnActiveState ? (
    <button className="btn card-go-cart-btn btn-accented">
      <Link to="/cart">Go to Cart</Link>
    </button>
  ) : (
    <button
      onClick={handleCartClick}
      className={' btn card-cart-btn btn-outline-black'}
    >
      Cart
    </button>
  );
};
