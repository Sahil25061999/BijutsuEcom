import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar home-navbar">
      <div className="logo-container">
        <h2>
          <a href="#">Bijutsu</a>
        </h2>
      </div>
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

      <nav className="navbar-menu">
        <ul className="navbar-list list-style-none">
          <li className="navbar-item">
            <a href="#" className="btn navbar-link">
              <span className="fa-solid fa-globe navbar-icon"></span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link btn">
              Login
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link btn btn-black">
              Sign up
            </a>
          </li>
          <li className="navbar-item hamburger-icon">
            <a href="#" className="navbar-link btn">
              <span className="fa-solid fa-bars"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
