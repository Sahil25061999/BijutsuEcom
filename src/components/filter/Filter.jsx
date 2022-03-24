import React from 'react';
import './Filter.css';
const Filter = () => {
  return (
    <aside className="filter-section">
      <form className="filter-container" action="">
        <div className="filter-head-section d-flex">
          <h3 className="filter-title">Filters</h3>
          <button className="btn btn-link-primary filter-clear-btn">
            Clear
          </button>
        </div>
        <div className="filter-elements filter-price-element">
          <h3>Price</h3>
          <div className="filter-input-container">
            <input
              type="range"
              min="$50"
              max="$35000"
              className="range-selector filter-range-selector"
            />
            <div className="filter-price-bottom-container">
              <span>$50</span>
              <span>$35000</span>
            </div>
          </div>
        </div>
        <div className="filter-elements filter-category-element">
          <h3>Category</h3>
          <div className="filter-input-container">
            <label className="margin-b-5">
              <input
                name="digital_art_checkbox"
                id="digital_art_checkbox"
                type="checkbox"
                value="Digital art"
                className="checkbox"
              />
              Digital Art
            </label>

            <label className="margin-b-5">
              <input
                name="photography_checkbox"
                id="photography_checkbox"
                type="checkbox"
                value="Photography"
                className="checkbox"
              />
              Photography
            </label>
            <label className="margin-b-5">
              <input
                name="music_checkbox"
                id="music_checkbox"
                type="checkbox"
                value="music"
                className="checkbox"
              />
              Music
            </label>
            <label className="margin-b-5">
              <input
                name="gif_checkbox"
                id="gif_checkbox"
                type="checkbox"
                value="gif"
                className="checkbox"
              />
              Gif
            </label>
          </div>
        </div>
        <div className="filter-elements filter-rating-element">
          <h3>Ratings</h3>
          <div className="filter-input-container">
            <label className="margin-b-5">
              <input
                name="ratings"
                type="radio"
                value="4 stars & above"
                className="radio margin-r-5"
              />
              4 stars & above
            </label>
            <label className="margin-b-5">
              <input
                name="ratings"
                type="radio"
                value="3 stars & above"
                className="radio margin-r-5"
              />
              3 stars & above
            </label>
            <label className="margin-b-5">
              <input
                name="ratings"
                type="radio"
                value="2 stars & above"
                className="radio margin-r-5"
              />
              2 stars & above
            </label>
            <label className="margin-b-5">
              <input
                name="ratings"
                type="radio"
                value="1 stars & above"
                className="radio margin-r-5"
              />
              1 stars & above
            </label>
          </div>
        </div>
        <div className="filter-elements filter-sort-element">
          <h3>Sort by</h3>
          <div className="filter-input-container">
            <label className="margin-b-5">
              <input
                name="sort"
                type="radio"
                value="Featured Products"
                className="radio margin-r-5"
              />
              Featured Products
            </label>
            <label className="margin-b-5">
              <input
                name="sort"
                type="radio"
                value="Price high to low"
                className="radio margin-r-5"
              />
              Price high to Low
            </label>
            <label className="margin-b-5">
              <input
                name="sort"
                type="radio"
                value="Price low to high"
                className="radio margin-r-5"
              />
              Price low to high
            </label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filter;
