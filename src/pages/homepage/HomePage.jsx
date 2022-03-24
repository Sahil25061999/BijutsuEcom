import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import {
  HomeCardVertical,
  CategoryCard,
} from '../../components/productCard/ProductCard';
import { cardData, categoryCardData } from '../../data/cardData/cardData';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className="home-container">
      {/* HERO SECTION  */}
      <section className="home-section hero-section">
        <div className="hero-container">
          <h1 className="h2">
            Explore, sell and buy different digital art, photos, music.
          </h1>
          <div className="hero-button-container">
            <button className="btn btn-white">Explore</button>
          </div>
        </div>
      </section>

      {/**TOP CATEGORIES SECTION **/}

      <section className="home-section categories-section">
        <h2 className="h3 home-section-title text-center">
          Browse Top catgories
        </h2>
        <section className="cards-section home-cards-section">
          {categoryCardData.map((items) => (
            <CategoryCard imgSrc={items.imgSrc} category={items.category} />
          ))}

          <div className="card home-card">
            <div className="card-hover home-card-hover">
              <Link to="/product-list" className="btn btn-white">
                Browse
              </Link>
            </div>
            <div className="card-image-container">
              <iframe
                title="office"
                src="https://giphy.com/embed/12XMGIWtrHBl5e"
                width="480"
                height="392"
                frameborder="0"
                className="giphy-embed"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/the-office-no-steve-carell-12XMGIWtrHBl5e">
                  via GIPHY
                </a>
              </p>
            </div>
            <div className="card-head">
              <h3 className="card-heading d-flex">Gif</h3>
            </div>
          </div>
        </section>
      </section>

      {/** TRENDING PRODUCTS **/}

      <section className="home-section categories-section">
        <h2 className="h3 home-section-title text-center">Trending products</h2>
        <section className="cards-section home-cards-section">
          {/* <button className="btn btn-float btn-white btn-left">
            <span className="fa-solid fa-angle-left"></span>
          </button> */}
          <button className="btn btn-float btn-white btn-right">
            <span className="fa-solid fa-angle-right"></span>
          </button>
          {cardData.map((item) => (
            <HomeCardVertical
              key={uuid()}
              imgSrc={item.imgSrc}
              category={item.category}
              cardHeading={item.cardHeading}
              cardBadge={item.cardBadge}
              cardSubHeading={item.cardSubHeading}
              cardContent={item.cardContent}
              productDiscountedPrice={item.productDiscountedPrice}
              productOriginalPrice={item.productOriginalPrice}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default HomePage;
