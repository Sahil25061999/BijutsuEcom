import React from 'react';
import { useCart } from '../../context/cart-context';
import './PriceSection.css';

export const PriceSection = () => {
  const { itemInCart, cartData } = useCart();
  const totalPrice = cartData.reduce((acc, curr) => {
    return curr.productDiscountedPrice + acc;
  }, 0);
  const discount =
    cartData.reduce((acc, curr) => {
      return curr.productOriginalPrice + acc;
    }, 0) - totalPrice;
  return (
    <aside className="cart-price-section">
      <h3>Price details</h3>
      <div className="cart-price-container">
        <div>
          <h4 className="muted-text-color">
            Price <span className="total-items"> ({itemInCart} items) </span>
          </h4>
          <h4 className="cart-original-price">{totalPrice}</h4>
        </div>
        <div>
          <h4 className="muted-text-color">Discount</h4>
          <h4 className="cart-discount-price">-${Math.abs(discount)}</h4>
        </div>
        <div>
          <h4 className="muted-text-color">Delivery Charges</h4>
          <h4 className="cart-delivery-charges">$10</h4>
        </div>
        <div>
          <h3 className="muted-text-color">Total Charges</h3>
          <h4 className="cart-total-charges">${totalPrice + 10}</h4>
        </div>
      </div>
      <p className="muted-text-color">
        You will save <span> </span>
        <strong className="cart-discount-price primary-text-color">
          -${Math.abs(discount)}
        </strong>
      </p>
      <button className="btn btn-black cart-order-btn">Place Order</button>
    </aside>
  );
};
