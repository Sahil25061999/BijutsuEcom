import React from 'react';
import { v4 as uuid } from 'uuid';

import { CardVertical } from '../../components/productCard/ProductCard';
import { cardData } from '../../data/cardData/cardData';

import './ProductList.css';
import Filter from '../../components/filter/Filter';

const ProductList = () => {
  return (
    <>
      <main className="body">
        <Filter />
        <section class="product-list">
          {cardData.map((item) => (
            <CardVertical
              key={uuid()}
              imgSrc={item.imgSrc}
              category={item.category}
              cardHeading={item.cardHeading}
              cardSubHeading={item.cardSubHeading}
              cardBadge={item.cardBadge}
              productDiscountedPrice={item.productDiscountedPrice}
              productOriginalPrice={item.productOriginalPrice}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default ProductList;
