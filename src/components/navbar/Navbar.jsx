import { NavLink } from 'react-router-dom';
import { SearchBar } from '../component_index';

import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <header className="navbar home-navbar">
        <div className="logo-container">
          <h2>
            <NavLink to="/">Bijutsu</NavLink>
          </h2>
        </div>
        <SearchBar />
        <nav className="navbar-menu">
          <ul className="navbar-list list-style-none">
            <li className="navbar-item">
              <NavLink to="/product-list" className=" btn navbar-link ">
                <span className="fa-solid fa-globe navbar-icon"></span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/wishlist" className=" btn navbar-link ">
                <span className="fa-solid fa-heart navbar-icon"></span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/cart" className=" btn navbar-link ">
                <span className="fa-solid fa-cart-shopping navbar-icon"></span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/login" className="navbar-link btn">
                Login
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/signup" className="navbar-link btn btn-black">
                Sign up
              </NavLink>
            </li>
            <li className="navbar-item hamburger-icon">
              <a href="#" className="navbar-link btn">
                <span className="fa-solid fa-bars"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
