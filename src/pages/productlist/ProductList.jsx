import React from 'react';

import { cardData } from '../../data/cardData/cardData';
import './ProductList.css';
import { CardVertical, Filter } from '../../components/component_index';

export const ProductList = () => {
  return (
    <>
      <main className="productList-body">
        <Filter />
        <section class="product-list">
          {cardData.map((item) => (
            <CardVertical
              key={item.id}
              imgSrc={item.imgSrc}
              category={item.category}
              cardHeading={item.cardHeading}
              cardSubHeading={item.cardSubHeading}
              cardBadge={item.cardBadge}
              productDiscountedPrice={item.productDiscountedPrice}
              productOriginalPrice={item.productOriginalPrice}
              wishlist={item.wishlist}
              cart={item.cart}
            />
          ))}
        </section>
      </main>
    </>
  );
};
