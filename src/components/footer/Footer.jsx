import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-about-us">
        <h3>About us</h3>
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
        <h3>Support</h3>
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
        <h3>Socials</h3>
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
