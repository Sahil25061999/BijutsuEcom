import React from 'react';
import { BuyButton, CartButton, WishlistButton } from '../component_index';
import './ProductCard.css';

const HomeCardVertical = ({
  imgSrc,
  category,
  cardHeading,
  cardSubHeading,
  cardContent,
  productDiscountedPrice,
  productOriginalPrice,
}) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          alt="product-image"
          src={imgSrc}
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">{cardHeading}</h3>
        <p className="card-subheading">{cardSubHeading}</p>
      </div>
      <div className="card-content">
        <p>{cardContent}</p>
        <div className="card-pricing">
          <h3 className="margin-r-5">{productDiscountedPrice}</h3>
          <span className="card-og-price small-text strike-text">
            {productOriginalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

const CardVertical = ({
  imgSrc,
  category,
  cardHeading,
  cardBadge,
  cardSubHeading,
  productDiscountedPrice,
  productOriginalPrice,
  wishlist,
  cart,
  inStock,
}) => {
  return (
    <div className="card">
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
        <h3 className="card-heading d-flex">{cardHeading}</h3>
        <p className="card-subheading">{cardSubHeading}</p>
        {cardBadge.rating && (
          <span class="badge-text badge-sm badge-primary">
            ⭐ {cardBadge.rating} {cardBadge.fast ? 'express delivery' : ''}
          </span>
        )}
      </div>
      <div className="card-content">
        <div className="card-pricing">
          <h3 className="margin-r-5">${productDiscountedPrice}</h3>
          <span className="card-og-price small-text strike-text">
            {productOriginalPrice}
          </span>
        </div>
      </div>
      <div className="card-foot d-flex">
        <BuyButton />
        <CartButton cartState={cart} />
        <WishlistButton wishlistState={wishlist} />
      </div>
    </div>
  );
};

const CategoryCard = ({ imgSrc, category }) => {
  return (
    <div className="card home-card">
      <div className="card-hover home-card-hover">
        <a href="#" className="btn btn-white">
          Browse
        </a>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={imgSrc} loading="lazy" />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">{category}</h3>
      </div>
    </div>
  );
};

export { HomeCardVertical, CategoryCard, CardVertical };
