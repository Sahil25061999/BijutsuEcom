import React from 'react';
import { BuyButton, CartButton, WishlistButton } from '../../component_index';
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
  return (
    <div className="card product-card">
      {!inStock && (
        <div className="card-text-overlay">
          <span className="badge-text badge-lg badge-secondary">
            Out of stock
          </span>
        </div>
      )}
      <div className="card-image-container">
        <img
          className="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <div className="card-head-top d-flex">
          <h4 className="card-heading d-flex">{cardHeading}</h4>
          <p>
            {rating && (
              <span className="badge-text badge-sm badge-primary">
                <span className="fa-regular fa-star"></span> {rating}
              </span>
            )}
            {fast && (
              <span className="badge-text badge-sm badge-primary">
                {fast ? 'express delivery' : ''}
              </span>
            )}
          </p>
        </div>

        <p className="card-subheading">{cardSubHeading}</p>
      </div>
      <div className="card-content">
        <div className="card-pricing">
          <h2 className="margin-r-5">
            <span className="card-og-price small-text strike-text muted-text-color">
              <span className="currency-symbol">Rs.</span>
              {productOriginalPrice}
            </span>{' '}
            <span className="currency-symbol">Rs.</span>
            {productDiscountedPrice}
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
