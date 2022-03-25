import React from 'react';
import { Checkbox, RadioButton } from '../input/Input';
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
              <Checkbox
                id="digital_art_checkbox"
                name="digital_art_checkbox"
                value="Digital art"
              />
              Digital Art
            </label>

            <label className="margin-b-5">
              <Checkbox
                id="photography_checkbox"
                name="photography_checkbox"
                value="Photography"
              />
              Photography
            </label>
            <label className="margin-b-5">
              <Checkbox
                id="music_checkbox"
                name="music_checkbox"
                value="music"
              />
              Music
            </label>
            <label className="margin-b-5">
              <Checkbox id="gif_checkbox" name="gif_checkbox" value="gif" />
              Gif
            </label>
          </div>
        </div>
        <div className="filter-elements filter-rating-element">
          <h3>Ratings</h3>
          <div className="filter-input-container">
            <label className="margin-b-5">
              <RadioButton name="ratings" value="4 stars & above" />4 stars &
              above
            </label>
            <label className="margin-b-5">
              <RadioButton name="ratings" value="3 stars & above" />3 stars &
              above
            </label>
            <label className="margin-b-5">
              <RadioButton name="ratings" value="2 stars & above" />2 stars &
              above
            </label>
            <label className="margin-b-5">
              <RadioButton name="ratings" value="1 stars & above" />1 stars &
              above
            </label>
          </div>
        </div>
        <div className="filter-elements filter-sort-element">
          <h3>Sort by</h3>
          <div className="filter-input-container">
            <label className="margin-b-5">
              <RadioButton name="sort" value="Featured Products" />
              Featured Products
            </label>
            <label className="margin-b-5">
              <RadioButton name="sort" value="Price high to low" />
              Price high to Low
            </label>
            <label className="margin-b-5">
              <RadioButton name="sort" value="Price low to high" />
              Price low to high
            </label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filter;
