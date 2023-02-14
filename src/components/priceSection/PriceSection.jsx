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
    <aside className="cart-price-section ">
      <div className="cart-price-container ">
        <div className="price-row">
          <p className="h4">SubTotal</p>
          <p className="cart-original-price">
            <span className="currency-symbol">Rs.</span>
            {totalPrice}
          </p>
        </div>
        <div className="price-row">
          <p className="">Discount</p>
          <p className="cart-discount-price">
            <span className="currency-symbol">Rs.</span>
            {Math.abs(discount)}
          </p>
        </div>
        <div className="price-row">
          <p className="">Delivery Charges</p>
          <p className="cart-delivery-charges">
            <span className="currency-symbol">Rs.</span>10
          </p>
        </div>
        <div className="price-row total-charges">
          <h3 className="">Total Charges</h3>
          <h3 className="cart-total-charges">
            <span className="currency-symbol">Rs.</span>
            {totalPrice + 10}
          </h3>
        </div>
      </div>

      <button className="btn btn-black cart-order-btn">Place Order</button>
    </aside>
  );
};
