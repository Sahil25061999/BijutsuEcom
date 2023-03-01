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
      className="card home-card"
      onMouseEnter={(e) => {
        setDisplayVid(true);
      }}
      onMouseLeave={() => {
        setDisplayVid(false);
      }}
    >
      {/* <div className="card-hover home-card-hover"></div> */}

      <div className="card-image-container category-image-container">
        <video
          onMouseEnter={(e) => {
            e.target.play();
          }}
          onMouseLeave={(e) => {
            e.target.pause();
          }}
          style={{
            opacity: `${displayVid ? '1' : '0'}`,
            // display: `${displayVid ? 'block' : 'none'}`,
          }}
          className="card-video card-image category-image"
          autoPlay
          // loop
          muted
        >
          <source src={vidSrc} type="video/mp4" />
        </video>
        <img
          style={
            {
              // opacity: `${displayVid ? '0' : '1'}`,
              // display: `${displayVid ? 'none' : 'block'}`,
            }
          }
          alt="category_image"
          className="card-image category-image"
          src={imgSrc}
          loading="lazy"
        />
      </div>
      <div className="card-head d-flex category-card-head">
        <p className="card-heading d-flex">{category}</p>

        <button
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
          className="btn  browse-btn"
          aria-label="browse button"
        >
          <span className="fa-solid fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
};
