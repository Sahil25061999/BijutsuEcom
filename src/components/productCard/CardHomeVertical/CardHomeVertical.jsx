import React from 'react';
import '../ProductCard.css';

export const CardHomeVertical = ({
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
