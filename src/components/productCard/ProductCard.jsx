import React from 'react';
import './ProductCard.css';

const ProductCardVertical = ({
  imgSrc,
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
          src={imgSrc}
          alt="product-image"
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
      <div className="card-foot d-flex">
        <button className="btn btn-black margin-r-10">Buy</button>
        <button className="btn btn-outline-black">Cart</button>
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
        <img
          className="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">{category}</h3>
      </div>
    </div>
  );
};

export { ProductCardVertical, CategoryCard };
