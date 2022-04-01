import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardHomeVertical,
  CardCategory,
} from '../../components/component_index';
import { cardData } from '../../data/cardData/cardData';
import { useScrollTop } from '../../hooks/useScrollTop';
import './HomePage.css';

export const HomePage = () => {
  useScrollTop();
  return (
    <main className="home-container">
      {/* HERO SECTION  */}
      <section className="home-section hero-section">
        <div className="hero-container">
          <h1 className="h2">
            Explore, sell and buy different digital art, photos, music.
          </h1>
          <div className="hero-button-container">
            <Link to="/product-list">
              <button className="btn btn-white">Explore</button>
            </Link>
          </div>
        </div>
      </section>

      {/**TOP CATEGORIES SECTION **/}

      <section className="home-section categories-section">
        <h2 className="h3 home-section-title text-center">
          Browse Top catgories
        </h2>
        <section className="cards-section home-cards-section">
          {cardData.map((items) => (
            <CardCategory
              key={items.id}
              imgSrc={items.imgSrc}
              category={items.productCategory.name}
            />
          ))}
        </section>
      </section>

      {/** TRENDING PRODUCTS **/}

      <section className="home-section categories-section">
        <h2 className="h3 home-section-title text-center">Trending products</h2>
        <section className="cards-section home-cards-section">
          {cardData.map((item) => (
            <CardHomeVertical
              key={item.id}
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
