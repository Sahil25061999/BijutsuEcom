import React from 'react';
import './CartButton.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, useProductList } from '../../../context/context_index';
import { postCartData } from '../../../api-call/api-index';

export const CartButton = ({ id, fromHorizon = false }) => {
  const { cartData, setCartData } = useCart();
  const { productList } = useProductList();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const handleCartClick = async (e) => {
    e.stopPropagation();
    if (token) {
      const [product] = productList.filter((item) => item._id === id);
      const response = await postCartData(token, product);
      if (response.status === 201) {
        setCartData([...response.data.cart].reverse());
      }
      return;
    }
    navigate('/login');
  };

  return cartData.some((item) => item._id === id) ? (
    <button
      className="btn cart-btn go-cart-btn"
      onClick={(e) => {
        e.stopPropagation();
        navigate('/cart');
      }}
    >
      <span className="btn-text">Go to Cart</span>
      <span className="fa-solid fa-arrow-right btn-icon"></span>
    </button>
  ) : (
    <button
      onClick={handleCartClick}
      className=" btn cart-btn btn-outline-black"
    >
      <span className="btn-text">Add to Cart</span>

      <span className="fa-solid fa-cart-shopping  btn-icon"></span>
    </button>
  );
};
