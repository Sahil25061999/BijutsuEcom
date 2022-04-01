import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWishlist } from '../../context/wishlist-context';
import { useCart } from '../../context/cart-context';
import { SearchBar } from '../component_index';

import './Navbar.css';
import { useFilter } from '../../context/filter-context';

export const Navbar = () => {
  const { itemInWishlist } = useWishlist();
  const { itemInCart } = useCart();
  const { filterDispatch } = useFilter();
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
              <NavLink
                to="/product-list"
                className=" btn navbar-link "
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
                }}
              >
                <span className="fa-solid fa-globe navbar-icon"></span>
              </NavLink>
            </li>
            <li className="navbar-item ">
              <NavLink
                to="/wishlist"
                className=" btn navbar-link badge-container "
              >
                {itemInWishlist > 0 && (
                  <div className="badge badge-round-md">{itemInWishlist}</div>
                )}

                <span className="fa-solid fa-heart navbar-icon"></span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/cart" className=" btn navbar-link badge-container">
                {itemInCart > 0 && (
                  <div className="badge badge-round-md">{itemInCart}</div>
                )}
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
