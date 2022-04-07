import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardHomeVertical,
  CardCategory,
} from '../../components/component_index';
import { useProductList } from '../../context/context_index';
import { useScrollTop } from '../../hooks/useScrollTop';
import './HomePage.css';

export const HomePage = () => {
  const { productList } = useProductList();
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
          {productList.map((item) => (
            <CardCategory key={item._id} item={item} />
          ))}
        </section>
      </section>

      {/** TRENDING PRODUCTS **/}

      <section className="home-section categories-section">
        <h2 className="h3 home-section-title text-center">Trending products</h2>
        <section className="cards-section home-cards-section">
          {productList.map((item) => (
            <CardHomeVertical key={item._id} item={item} />
          ))}
        </section>
      </section>
    </main>
  );
};
