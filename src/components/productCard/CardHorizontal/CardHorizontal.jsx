import React, { useState, useEffect } from 'react';
import { useCart } from '../../../context/cart-context';
import { WishlistButton } from '../../component_index';
import { cardData } from '../../../data/cardData/cardData';

import './CardHorizontal.css';
export const CardHorizontal = ({ item }) => {
  const {
    id,
    imgSrc,
    category,
    cardHeading,
    cardBadge,
    cardSubHeading,
    productDiscountedPrice,
    productOriginalPrice,
    wishlist,
    quantity,
    cart,
  } = item;
  const { cartData, setCartData } = useCart();
  const [decrementBtnState, setDecrementBtnState] = useState(false);
  const [incrementBtnState, setIncrementBtnState] = useState(false);
  const handleIncrement = () => {
    for (const item of cartData) {
      if (item.id === id) {
        if (item.inStock === 0) {
          setIncrementBtnState(true);
          break;
        }

        setDecrementBtnState(false);
        item.quantity += 1;
        item.inStock -= 1;
        item.productDiscountedPrice *= item.quantity;
        item.productOriginalPrice *= item.quantity;
        break;
      }
    }
    setCartData([...cartData]);
  };
  const handleDecrement = () => {
    for (const item of cartData) {
      if (item.id === id) {
        if (item.quantity === 1) {
          setDecrementBtnState(true);
          break;
        }
        setIncrementBtnState(false);
        item.productDiscountedPrice /= item.quantity;
        item.productOriginalPrice /= item.quantity;
        item.quantity -= 1;
        item.inStock += 1;
        break;
      }
    }
    setCartData([...cartData]);
  };
  const handleRemove = () => {
    for (const item of cartData) {
      if (item.id === id) {
        item.cart = !item.cart;
        item.quantity = 1;
        break;
      }
    }
    setCartData([...cardData.filter((item) => item.cart)]);
  };

  return (
    <div className="card cart-card card-horizontal">
      <div className="card-image-container">
        <img
          className="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">
          {cardHeading}
          <span className="badge-text badge-sm badge-accent">Hot</span>
        </h3>
        <p className="card-subheading muted-text-color">{cardSubHeading}</p>
      </div>
      <div className="card-content">
        <div className="card-pricing">
          <h3 className="margin-r-5 card-price">${productDiscountedPrice}</h3>
          <span className="card-og-price small-text strike-text muted-text-color">
            {productOriginalPrice}
          </span>
        </div>
        <h3 className="muted-text-color card-discount">20% off</h3>
        <div className="card-quantity-container d-flex">
          <h4 className="margin-r-10">Quantity</h4>
          <button
            className="btn btn-primary quantity-minus-btn"
            onClick={handleDecrement}
            disabled={decrementBtnState}
          >
            <span className="fa fa-minus"></span>
          </button>
          <input
            type="number"
            className="card-quantity-input"
            min="1"
            placeholder={quantity}
          />
          <button
            className="btn btn-primary quantity-plus-btn"
            onClick={handleIncrement}
            disabled={incrementBtnState}
          >
            <span className="fa fa-plus"></span>
          </button>
        </div>
      </div>
      <div className="card-foot d-flex">
        <button className="card-buy-btn btn btn-black" onClick={handleRemove}>
          Remove from Cart
        </button>

        <WishlistButton id={id} wishlistState={wishlist} fromHorizon={true} />
      </div>
    </div>
  );
};
