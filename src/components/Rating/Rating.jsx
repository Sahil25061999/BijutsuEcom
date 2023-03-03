import React, { useState, useEffect, useRef } from 'react';
import './Rating.css';

export const Rating = ({ rating }) => {
  const ratingBackground = useRef([]);

  const getStyle = (idx) => {
    if (idx < Math.floor(rating)) {
      return { background: 'var(--muted-dark-color)' };
    }
    if (idx === Math.floor(rating)) {
      if (rating > Math.floor(rating)) {
        return {
          background:
            'linear-gradient(to left,rgb(187, 187, 187)50%,var(--muted-dark-color) 50%)',
        };
      }
    }
  };

  // useEffect(() => {
  //   for (let i = Math.floor(rating); i > 0; i--) {
  //     let currRating = ratingBackground.current[i - 1];
  //     currRating.style.background = 'yellow';
  //   }
  //   if (rating > Math.floor(rating)) {
  //     let currRating = Math.floor(rating);
  //     ratingBackground.current[currRating].style.background =
  //       'linear-gradient(to left,rgb(187, 187, 187) 50%, yellow 50%)';
  //   }
  // }, []);

  return (
    <div className="ratings-container d-flex">
      {new Array(5).fill(0).map((item, idx) => (
        <div className="rating-container" key={idx}>
          <div
            className="rating-bg"
            style={getStyle(idx)}
            // ref={(element) => ratingBackground.current.push(element)}
          >
            <span className="fa-solid fa-star"></span>
          </div>
        </div>
      ))}
    </div>
  );
};
