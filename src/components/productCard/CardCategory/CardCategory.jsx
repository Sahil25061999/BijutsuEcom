import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useFilter } from '../../../context/context_index';
import '../ProductCard.css';
import './CardCategory.css';

export const CardCategory = ({ item }) => {
  const { vidSrc, imgSrc, categoryName: category } = item;
  const [displayVid, setDisplayVid] = useState(false);
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  return (
    <div
      className="card home-card category-card"
      onClick={() => {
        navigate('/product-list');
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
    >
      <div className="card-image-container category-image-container">
        <div
          className="card-title-wrap"
          // style={{ background: `url(${imgSrc})` }}
        >
          {' '}
          <div
            className="card-title "
            // style={{
            //   background: `url(${imgSrc})`,
            //   WebkitBackgroundClip: 'text',
            // }}
          >
            <h1>{category}</h1>
          </div>
        </div>

        <img
          alt="category_image"
          className="card-image category-image"
          src={imgSrc}
          loading="lazy"
        />
      </div>
      <div className="card-head d-flex category-card-head">
        <p className="card-heading d-flex">{category}</p>

        <button className="btn  browse-btn" aria-label="browse button">
          <span className="fa-solid fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
};
