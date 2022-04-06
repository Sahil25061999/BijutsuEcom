import React from 'react';
import { Link } from 'react-router-dom';
import { useFilter } from '../../../context/context_index';
import '../ProductCard.css';

export const CardCategory = ({ item }) => {
  const {
    imgSrc,
    productCategory: { name: category },
  } = item;
  const { filterDispatch } = useFilter();
  return (
    <div className="card home-card">
      <div className="card-hover home-card-hover">
        <Link to="/product-list">
          <button
            onClick={() => {
              filterDispatch({
                type: 'CLEAR',
                payload: {
                  rangeState: {
                    defaultValue: 0,
                    start: 10,
                    end: 35000,
                  },
                  sortByState: null,
                  ratingState: null,
                  otherCategoryState: {
                    expressDelivery: false,
                    includeAll: false,
                  },
                  categoryState: {
                    digitalArt: false,
                    photography: false,
                    music: false,
                    gif: false,
                  },
                },
              });
              filterDispatch({ type: category.toUpperCase() });
            }}
            className="btn btn-white"
          >
            Browse
          </button>
        </Link>
      </div>
      <div className="card-image-container">
        <img
          alt="category_image"
          className="card-image"
          src={imgSrc}
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">{category}</h3>
      </div>
    </div>
  );
};
