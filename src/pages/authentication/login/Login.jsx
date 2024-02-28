import React, { useState } from "react";
import axios from "axios";
import "../Authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useToken, useWishlist } from "../../../context/context_index";
import {
  postLogin,
  getWishlistData,
  getCartData,
} from "../../../api-call/api-index";
import { useError } from "../../../reducer/useError";

export const Login = () => {
  const [user, setUser] = useState({
    loginEmail: "test123@gmail.com",
    loginPassword: "test123",
  });
  const [error, errorDispatch] = useError();
  const { emailError, passwordError } = error;
  const [showPassword, setShowPassword] = useState(false);
  const { setCartData } = useCart();
  const { setWishlistData } = useWishlist();
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await postLogin(user.loginEmail, user.loginPassword);
    if (response.status === 404) {
      errorDispatch({
        type: "EMAIL_ERROR",
        payload: "email doesnt exist",
      });
      return;
    }
    if (!Object.keys(response.data).length) {
      errorDispatch({ type: "PASSWORD_ERROR", payload: "check password" });
    }
    if (response.data.encodedToken) {
      localStorage.setItem("token", response.data.encodedToken);
      setToken(localStorage.getItem("token"));

      const dataFromCart = await getCartData(response.data.encodedToken);
      const dataFromWishlist = await getWishlistData(
        response.data.encodedToken
      );

      setCartData([...dataFromCart.data.cart]);
      setWishlistData([...dataFromWishlist.data.wishlist]);
      navigate("/");
    }
  };

  return (
    <main className="authentication-body">
      <form action="" className="form-container login-container">
        <h2 className="form-head text-center">Log In</h2>

        <div className="form-inputs">
          <div className="input-container">
            <label htmlFor="email">
              Email <span className="text-center error-msg">{emailError}</span>
            </label>
            <input
              value={user.loginEmail}
              id="email"
              className="textbox"
              type="email"
              onChange={(e) => setUser({ ...user, loginEmail: e.target.value })}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">
              Password{" "}
              <span className="text-center error-msg">{passwordError}</span>
            </label>
            <input
              value={user.loginPassword}
              id="password"
              placeholder="should contain letters and number"
              className="textbox"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setUser({ ...user, loginPassword: e.target.value })
              }
            />

            <span
              onClick={handleShowPassword}
              className={`fa-solid ${
                showPassword ? "fa-eye" : "fa-eye-slash"
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
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
