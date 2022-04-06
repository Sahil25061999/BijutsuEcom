import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-about-us">
        <h2>About us</h2>
        <ul className="list-style-none footer-list">
          <li className="footer-list-items">
            <span>Our Story</span>
          </li>
          <li className="footer-list-items">
            <span>Blogs</span>
          </li>
          <li className="footer-list-items">
            <span>Career</span>
          </li>
        </ul>
      </section>
      <section className="footer-support">
        <h2>Support</h2>
        <ul className="list-style-none footer-list">
          <li className="footer-list-items">
            <span>FAQ</span>
          </li>
          <li className="footer-list-items">
            <span>Contact Us</span>
          </li>
          <li className="footer-list-items">
            <span>Return & Refund Policy</span>
          </li>
        </ul>
      </section>
      <section className="footer-socials">
        <h2>Socials</h2>
        <ul className="list-style-none footer-list">
          <li className="footer-list-items">
            <span>Instagram</span>
          </li>
          <li className="footer-list-items">
            <span>Twitter</span>
          </li>
          <li className="footer-list-items">
            <span>Facebook</span>
          </li>
        </ul>
      </section>
    </footer>
  );
};
