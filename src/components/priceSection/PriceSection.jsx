import React from 'react';
// import Razorpay from 'razorpay';

import { useCart } from '../../context/cart-context';
import './PriceSection.css';

// dotenv.config();

export const PriceSection = () => {
  const { itemInCart, cartData } = useCart();
  const totalPrice = cartData.reduce((acc, curr) => {
    return curr.productDiscountedPrice + acc;
  }, 0);
  const discount =
    cartData.reduce((acc, curr) => {
      return curr.productOriginalPrice + acc;
    }, 0) - totalPrice;

  const createScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      console.log(script);
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload(() => {
        resolve(true);
      });
      script.onerror(() => {
        resolve(false);
      });
      document.body.appendChild = script;
    });
  };

  const handlepay = async () => {
    const options = {
      key: 'rzp_test_VQTU2AXyJKAlbA',
      amount: totalPrice * 100,
      currency: 'INR',
      name: 'Bijutsu',
      description: 'Buy art',
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'sahil padvi',
        email: 'sahilpadvi25@gmail.com',
        contact: '7507139592',
      },
      notes: {
        address: 'Razorpay Corporate office',
      },
      theme: {
        color: '#76C310',
      },
    };
    try {
      const razorpay = await new window.Razorpay(options);
      razorpay.open();
    } catch (e) {
      console.log(e);
    }
  };

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
      <form>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handlepay();
            // rzp1.open();
          }}
          className="btn btn-black cart-order-btn"
        >
          Place Order
        </button>
      </form>
    </aside>
  );
};
