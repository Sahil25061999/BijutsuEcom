import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BuyButton,
  CartButton,
  Rating,
  WishlistButton,
} from '../../component_index';
import './CardVertical.css';

import '../ProductCard.css';

export const CardVertical = ({ item }) => {
  const {
    _id: id,
    imgSrc,
    category,
    cardHeading,
    rating,
    expressDelivery: fast,
    cardSubHeading,
    productDiscountedPrice,
    productOriginalPrice,
    wishlist,
    cart,
    inStock,
  } = item;

  const navigate = useNavigate();

  return (
    <div
      className="card product-card"
      onClick={(e) => {
        navigate(`/product/${id}`, { state: { item } });
      }}
    >
      {!inStock && (
        <div className="card-text-overlay">
          <span className="badge-text badge-lg badge-secondary">
            Out of stock
          </span>
        </div>
      )}
      <div
        className="card-image-container"
        // onClick={() => navigate(`/product/${id}`, { state: { item } })}
      >
        <img
          className="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div
        className="card-head"
        // onClick={() => navigate(`/product/${id}`, { state: { item } })}
      >
        <div className="card-head-top d-flex">
          <p className="card-heading d-flex">{cardHeading}</p>
          <p>
            {fast && (
              <span className="badge-text badge-sm badge-primary express-badge">
                {fast ? 'express delivery' : ''}
              </span>
            )}
          </p>
        </div>

        <p className="card-subheading">{cardSubHeading}</p>
        <Rating rating={rating} />
      </div>
      <div className="card-content">
        <div className="card-pricing">
          <h2 className="margin-r-5">
            <span className="currency-symbol">Rs.</span>
            {productDiscountedPrice}
            <span className="margin-l-10 card-og-price small-text strike-text muted-text-color">
              <span className="currency-symbol">Rs.</span>
              {productOriginalPrice}
            </span>{' '}
          </h2>
          {/* <span className="card-og-price small-text strike-text">
            {productOriginalPrice}
          </span> */}
        </div>
      </div>
      <div className="card-foot d-flex">
        {/* <BuyButton /> */}
        <CartButton cartState={cart} id={id} />
        <WishlistButton wishlistState={wishlist} id={id} />
      </div>
    </div>
  );
};
