import React, { useState } from 'react';
import axios from 'axios';
import '../Authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, useToken, useWishlist } from '../../../context/context_index';

export const Login = () => {
  const [user, setUser] = useState({
    loginEmail: '',
    loginPassword: '',
  });
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setCartData } = useCart();
  const { setWishlistData } = useWishlist();
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', {
        email: user.loginEmail,
        password: user.loginPassword,
      });
      console.log(response);
      if (!Object.keys(response.data).length) {
        setError(true);
      }
      if (response.data.encodedToken) {
        localStorage.setItem('token', response.data.encodedToken);
        setToken(localStorage.getItem('token'));

        const dataFromCart = await axios.get('/api/user/cart', {
          headers: { authorization: response.data.encodedToken },
        });
        const dataFromWishlist = await axios.get('/api/user/wishlist', {
          headers: { authorization: response.data.encodedToken },
        });
        setCartData([...dataFromCart.data.cart]);
        setWishlistData([...dataFromWishlist.data.wishlist]);
        navigate('/');
      }
    } catch (error) {
      if (error.response.status === 404) {
        setError(true);
      }
      console.log(error);
    }
  };

  return (
    <main className="authentication-body">
      <form action="" className="form-container login-container">
        <h2 className="form-head text-center">Log In</h2>

        <div className="form-inputs">
          <div className="input-container">
            <label htmlFor="email">
              Email{' '}
              {error && (
                <span
                  style={{ marginTop: '5px', color: 'red' }}
                  className="text-center"
                >
                  Check email before login
                </span>
              )}
            </label>
            <input
              id="email"
              className="textbox"
              type="email"
              onChange={(e) => setUser({ ...user, loginEmail: e.target.value })}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">
              Password{' '}
              {error && (
                <span
                  style={{ marginTop: '5px', color: 'red' }}
                  className="text-center"
                >
                  Check password before login
                </span>
              )}
            </label>
            <input
              id="password"
              className="textbox"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) =>
                setUser({ ...user, loginPassword: e.target.value })
              }
            />

            <span
              onClick={handleShowPassword}
              className={`fa-solid ${
                showPassword ? 'fa-eye' : 'fa-eye-slash'
              } password-eye-icon`}
            ></span>
          </div>
          <div className="input-container remember-me-container">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <span className="small-text secondary-text-color forgot-pwd-link">
              forgot password ?
            </span>
          </div>
          <button
            className="btn btn-primary form-log-in-btn"
            onClick={handleLogin}
          >
            Log In
          </button>

          <p className="form-or-text">
            <span className="line"></span>Or<span className="line"></span>
          </p>

          <div className="form-default-mail-container">
            <button className="btn btn-with-icon google-btn btn-black">
              <span>
                <span className="fa-brands fa-google btn-icon"></span> Log in
                using google
              </span>
            </button>
          </div>
          <p className="small-text no-account-condition text-center muted-text-color">
            Don't have an account ?
            <Link
              to="/signup"
              className="secondary-text-color form-signup-link"
            >
              {' '}
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
