import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import { useWishlist, useCart, useToken } from '../../context/context_index';
import { SearchBar } from '../component_index';
import './Navbar.css';

export function SideNavbar({ display }) {
  console.log(display);
  const { setWishlistData, itemInWishlist } = useWishlist();
  const { setCartData, itemInCart } = useCart();

  const { token, setToken } = useToken();

  const handleLogout = () => {
    setToken(localStorage.clear());
    setCartData([]);
    setWishlistData([]);
  };
  return (
    <nav className={`side-nav ${display ? 'visible' : ''}`}>
      <ul className="navbar-list list-style-none">
        <li className="navbar-item">
          <NavLink to="/product-list" className=" btn navbar-link ">
            Explore
          </NavLink>
        </li>

        {token ? (
          <>
            <li className="navbar-item ">
              <NavLink
                to="/wishlist"
                className=" btn navbar-link badge-container "
              >
                {itemInWishlist > 0 && (
                  <div className="badge badge-round-md">{itemInWishlist}</div>
                )}
                Wishlist
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/cart" className=" btn navbar-link badge-container">
                {itemInCart > 0 && (
                  <div className="badge badge-round-md">{itemInCart}</div>
                )}
                Cart
              </NavLink>
            </li>
            <li className="navbar-item">
              <Link
                to="/logout"
                onClick={handleLogout}
                className="btn navbar-link"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <NavLink to="/login" className="navbar-link btn">
                Login
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/signup" className="navbar-link btn ">
                Sign up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
