import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Authentication.css';
import { useToken } from '../../../context/context_index';

export const Signup = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { setToken } = useToken();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const checkemail = (emailToCheck) => {
    const emailRegex = /^[a-zA-z0-9\.-]+@[a-z0-9.-]+.[a-z]{2,8}$/;
    if (emailRegex.test(emailToCheck)) {
      return true;
    }
    return false;
  };
  const checkpassword = (passwordToCheck) => {
    const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
    if (passwordRegex.test(passwordToCheck)) {
      return true;
    }
    return false;
  };
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      !user.fullname &&
      !user.email &&
      !user.password &&
      !user.confirmPassword
    ) {
      return;
    }
    if (user.password !== user.confirmPassword) {
      console.log('password dont match');
      return;
    }
    const emailvalid = checkemail(user.email);
    if (!emailvalid) {
      console.log(user.email);
      console.log('not valid');
      return;
    }
    const passwordvalid = checkpassword(user.password);
    if (!passwordvalid) {
    }

    try {
      const response = await axios.post(`/api/auth/signup`, {
        name: user.fullname,
        email: user.email,
        password: user.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem('token', response.data.encodedToken);
      setToken(localStorage.getItem('token'));

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="authentication-body">
      <form action="" className="form-container signup-container">
        <h2 className="form-head text-center">Sign Up</h2>
        <div className="form-inputs">
          <div className="input-container">
            <label htmlFor="fullname">Full Name</label>
            <input
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              id="fullname"
              className="textbox"
              type="text"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              id="email"
              className="textbox"
              type="email"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              className="textbox"
              type={showPassword ? 'text' : 'password'}
              required
            />
            <span
              onClick={handleShowPassword}
              className={`fa-solid ${
                showPassword ? 'fa-eye' : 'fa-eye-slash'
              } password-eye-icon`}
            ></span>
          </div>
          <div className="input-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              className="textbox"
              type="password"
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <span className="fa-solid fa-eye password-eye-icon confirm-password-eye"></span>
          </div>
          <div className="input-container remember-me-container">
            <div>
              <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" />
                Remember me
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary form-sign-up-btn"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="small-text terms-condition">
            By signing up you agree to our{' '}
            <span className="secondary-text-color term-condtn-link">
              terms and conditions
            </span>
          </p>
          <p className="form-or-text">
            <span className="line"></span>Or<span className="line"></span>
          </p>

          <div className="form-default-mail-container">
            <button className="btn btn-with-icon google-btn btn-black">
              <span>
                <span className="fa-brands fa-google btn-icon"></span> Sign up
                using google
              </span>
            </button>
          </div>
          <p className="small-text have-account-condition text-center muted-text-color">
            Already have an account ? <span> </span>
            <Link to="/login" className="secondary-text-color form-login-link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
