import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        className="textbox"
        type="text"
        placeholder="Search images, gifs, music .."
      />
      <button className="btn btn-only-icon btn-square">
        <span className="fa-solid fa-magnifying-glass"></span>
      </button>
    </div>
  );
};

export default SearchBar;
