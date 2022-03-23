import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-about-us">
        <h2>About us</h2>
        <ul className="list-style-none footer-list">
          <li className="footer-list-items">
            <a href="#">Our Story</a>
          </li>
          <li className="footer-list-items">
            <a href="#">Blogs</a>
          </li>
          <li className="footer-list-items">
            <a href="#">Career</a>
          </li>
        </ul>
      </section>
      <section className="footer-support">
        <h2>Support</h2>
        <ul className="list-style-none footer-list">
          <li className="footer-list-items">
            <a href="#">FAQ</a>
          </li>
          <li className="footer-list-items">
            <a href="#">Contact Us</a>
          </li>
          <li className="footer-list-items">
            <a href="#">Return & Refund Policy</a>
          </li>
        </ul>
      </section>
      <section className="footer-socials">
        <h2>Socials</h2>
        <ul className="list-style-none footer-list">
          <li className="footer-list-items">
            <a href="#">Instagram</a>
          </li>
          <li className="footer-list-items">
            <a href="#">Twitter</a>
          </li>
          <li className="footer-list-items">
            <a href="#">Facebook</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
