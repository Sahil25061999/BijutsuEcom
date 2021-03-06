import React, { useState } from 'react';
import { useWishlist, useProductList } from '../../../context/context_index';
import {
  deleteWishlistData,
  postWishlistData,
} from '../../../api-call/api-index';
import { useNavigate } from 'react-router-dom';
import './WishlistButton.css';
export const WishlistButton = ({ id, wishlistState, fromHorizon }) => {
  const { wishlistData, setWishlistData } = useWishlist();
  const { productList, productListDispatch } = useProductList();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleWishlistAdd = async () => {
    if (token) {
      const [product] = productList.filter((item) => item._id === id);
      const response = await postWishlistData(product, token);
      if (response.status === 201) {
        setWishlistData([...response.data.wishlist]);
      }
      return;
    }
    navigate('/login');
  };
  const handleWishlistRemove = async () => {
    const response = await deleteWishlistData(id, token);
    if (response.status === 200) {
      setWishlistData([...response.data.wishlist]);
    }
    return;
  };

  return !fromHorizon ? (
    wishlistData.some((item) => item._id === id) ? (
      <button
        onClick={handleWishlistRemove}
        className="btn btn-only-icon wishlist-btn"
      >
        <span className="fa-solid fa-heart wishlist-btn-icon wishlist-btn-active"></span>
      </button>
    ) : (
      <button
        onClick={handleWishlistAdd}
        className="btn btn-only-icon wishlist-btn "
      >
        <span className="fa-solid fa-heart wishlist-btn-icon"></span>
      </button>
    )
  ) : wishlistData.some((item) => item._id === id) ? (
    <button
      onClick={handleWishlistRemove}
      className="card-go-cart-btn btn btn-accented "
    >
      Remove From wishlist
    </button>
  ) : (
    <button
      onClick={handleWishlistAdd}
      className="card-go-cart-btn btn btn-accented"
    >
      Add to wishlist
    </button>
  );
};
