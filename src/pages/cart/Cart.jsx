import React from 'react';
import { CardHorizontal, PriceSection } from '../../components/component_index';
import { useCart } from '../../context/cart-context';
import { useScrollTop } from '../../hooks/useScrollTop';
import './Cart.css';

export const Cart = () => {
  const { itemInCart, cartData } = useCart();
  useScrollTop();
  return (
    <main className="cart-body">
      <h2>
        My Cart <span className="cart-count">({itemInCart})</span>
      </h2>
      <section className="cart-product-list">
        {itemInCart ? (
          cartData.map((item) => <CardHorizontal key={item._id} item={item} />)
        ) : (
          <h2 className="empty-list">No Data Found</h2>
        )}
      </section>
      <PriceSection />
    </main>
  );
};
