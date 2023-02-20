import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../../context/context_index';
import { WishlistButton, CartButton } from '../../component_index';
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
    inStock,
  } = item;
  const [disableInc, setInc] = useState(false);
  const [disableDec, setDec] = useState(false);
  const { cartData, setCartData } = useCart();
  const location = useLocation();
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
      <div className="card-head d-flex">
        <div>
          <h4 className="card-heading d-flex">{cardHeading}</h4>
          <p className="card-subheading muted-text-color">{cardSubHeading}</p>
        </div>
        <div className="card-pricing ">
          <div className="">
            <h3 className="margin-r-5 card-price">
              <span className="card-og-price small-text strike-text muted-text-color">
                <span className="currency-symbol">Rs.</span>
                {productOriginalPrice}
              </span>{' '}
              <span className="currency-symbol">Rs.</span>
              {productDiscountedPrice}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-content"></div>
      <div className="card-foot d-flex">
        {location.pathname !== '/wishlist' ? (
          <>
            <p className="margin-r-10">Quantity</p>
            <div className="card-quantity-container d-flex">
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
                value={quantity}
                // placeholder={quantity}
              />
              {/* <div className="quantity-btn-container d-flex"> */}
              <button
                className={`btn btn-primary quantity-plus-btn ${
                  disableInc ? 'btn-deactive' : ''
                }`}
                onClick={handleIncrement}
                disabled={disableInc}
              >
                <span className="fa fa-plus"></span>
              </button>
              {/* </div> */}
            </div>
          </>
        ) : (
          ''
        )}

        <div className="btn-container d-flex">
          {location.pathname !== '/wishlist' ? (
            <button
              className="card-delete-btn btn btn-only-icon"
              onClick={handleRemove}
            >
              <span className="fa-solid fa-trash"></span>
            </button>
          ) : (
            <CartButton cartState={cart} id={id} fromHorizon={true} />
          )}

          <WishlistButton id={id} wishlistState={wishlist} fromHorizon={true} />
        </div>
      </div>
    </div>
  );
};
