import React, { useState, useEffect } from 'react';
import './Rating.css';

export const Rating = ({ rating }) => {
  const getWidth = (idx) => {
    const styleValue = { width: 0, background: 'transparent' };
    if (idx < Math.floor(rating)) {
      console.log(idx);
      return 100;
    }
    if (idx === Math.floor(rating)) {
      if (rating > Math.floor(rating)) {
        return 50;
      }
    }
  };

  return (
    <div className="ratings-container d-flex">
      {new Array(5).fill(0).map((item, idx) => (
        <div className="rating-container" key={idx}>
          <div
            className="rating-bg"
            style={{
              width: `${getWidth(idx)}%`,
              background: {},
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}
          >
            <span className="fa-solid fa-star"></span>
          </div>
        </div>
      ))}
    </div>
  );
};
