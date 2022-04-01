import React from 'react';
import '../ProductCard.css';
export const CardCategory = ({ imgSrc, category }) => {
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
