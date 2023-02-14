import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  CardHomeVertical,
  CardCategory,
} from '../../components/component_index';
import { useProductList } from '../../context/context_index';
import { useScrollTop } from '../../hooks/useScrollTop';
import './HomePage.css';

export const HomePage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { productList } = useProductList();

  useEffect(() => {
    (async () => {
      try {
        const categoryResponse = await axios.get('/api/categories');
        setCategoryList([...categoryResponse.data.categories]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

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
              <button className="btn btn-white explore-btn">Explore</button>
            </Link>
          </div>
        </div>
      </section>

      {/**TOP CATEGORIES SECTION **/}

      <section className="home-section categories-section">
        <h2 className=" home-section-title ">Browse Top catgories</h2>
        <section className="cards-section home-cards-section">
          {categoryList.map((item) => (
            <CardCategory key={item._id} item={item} />
          ))}
        </section>
      </section>

      {/** TRENDING PRODUCTS **/}

      <section className="home-section categories-section">
        <h2 className=" home-section-title ">Trending products</h2>
        <section className="cards-section home-cards-section">
          {productList.slice(0, 8).map((item) => (
            <CardHomeVertical key={item._id} item={item} />
          ))}
        </section>
      </section>
    </main>
  );
};
