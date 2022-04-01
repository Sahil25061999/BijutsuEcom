import React from 'react';
import { CardHorizontal, PriceSection } from '../../components/component_index';
import { useCart } from '../../context/cart-context';
import { cardData } from '../../data/cardData/cardData';
import './Cart.css';

export const Cart = () => {
  const { itemInCart, cartData } = useCart();
  return (
    <main className="cart-body">
      <h2>
        My Cart <span className="cart-count">({itemInCart})</span>
      </h2>
      <section className="cart-product-list">
        {itemInCart ? (
          cartData.map((item) => (
            <CardHorizontal
              key={item.id}
              id={item.id}
              imgSrc={item.imgSrc}
              category={item.category}
              cardHeading={item.cardHeading}
              cardSubHeading={item.cardSubHeading}
              cardBadge={item.cardBadge}
              productDiscountedPrice={item.productDiscountedPrice}
              productOriginalPrice={item.productOriginalPrice}
              wishlist={item.wishlist}
              quantity={item.quantity}
              cart={item.cart}
            />
          ))
        ) : (
          <h2 className="empty-list">No Data Found</h2>
        )}
      </section>
      <PriceSection />
    </main>
  );
};
