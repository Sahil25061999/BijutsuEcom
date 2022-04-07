import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../../../context/context_index';
import { WishlistButton } from '../../component_index';
import { postCartQuantity } from '../../../api-call/api-index';
import './CardHorizontal.css';
export const CardHorizontal = ({ item }) => {
  const {
    _id: id,
    imgSrc,
    category,
    cardHeading,
    cardBadge,
    cardSubHeading,
    productDiscountedPrice,
    productOriginalPrice,
    wishlist,
    qty: quantity,
    cart,
  } = item;
  const [disableInc, setInc] = useState(false);
  const [disableDec, setDec] = useState(false);
  const { cartData, setCartData } = useCart();
  const token = localStorage.getItem('token');

  const updateProduct = async (value) => {
    for (const item of cartData) {
      if (item._id === id) {
        if (item.qty <= 1 && value === 'decrement') {
          setDec(true);
          return;
        }
        if (item.qty >= item.inStock && value === 'increment') {
          setInc(true);
          return;
        }
        setDec(false);
        setInc(false);
        break;
      }
    }
    const response = await postCartQuantity(id, token, value);
    setCartData(
      [
        ...response.data.cart.map((item) => {
          if (item._id === id) {
            item.productDiscountedPrice *= item.qty;
            item.productOriginalPrice *= item.qty;
          }
          return item;
        }),
      ].reverse()
    );
  };
  const handleIncrement = async () => {
    await updateProduct('increment');
  };
  const handleDecrement = async () => {
    await updateProduct('decrement');
  };
  const handleRemove = async () => {
    const { data } = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    setCartData([...data.cart]);
  };

  return (
    <div className="card cart-card card-horizontal">
      <div className="card-image-container">
        <img
          className="card-image"
          src={imgSrc}
          alt="product-image"
          loading="lazy"
        />
      </div>
      <div className="card-head">
        <h3 className="card-heading d-flex">
          {cardHeading}
          <span className="badge-text badge-sm badge-accent">Hot</span>
        </h3>
        <p className="card-subheading muted-text-color">{cardSubHeading}</p>
      </div>
      <div className="card-content">
        <div className="card-pricing">
          <h3 className="margin-r-5 card-price">${productDiscountedPrice}</h3>
          <span className="card-og-price small-text strike-text muted-text-color">
            {productOriginalPrice}
          </span>
        </div>
        <h3 className="muted-text-color card-discount">20% off</h3>
        <div className="card-quantity-container d-flex">
          <h4 className="margin-r-10">Quantity</h4>
          <button
            className={`btn btn-primary quantity-minus-btn ${
              disableDec ? 'btn-deactive' : ''
            }`}
            onClick={handleDecrement}
            disabled={disableDec}
          >
            <span className="fa fa-minus"></span>
          </button>
          <input
            readOnly
            type="number"
            className="card-quantity-input"
            min="1"
            placeholder={quantity}
          />
          <button
            className={`btn btn-primary quantity-plus-btn ${
              disableInc ? 'btn-deactive' : ''
            }`}
            onClick={handleIncrement}
            disabled={disableInc}
          >
            <span className="fa fa-plus"></span>
          </button>
        </div>
      </div>
      <div className="card-foot d-flex">
        <button className="card-buy-btn btn btn-black" onClick={handleRemove}>
          Remove from Cart
        </button>

        <WishlistButton id={id} wishlistState={wishlist} fromHorizon={true} />
      </div>
    </div>
  );
};
