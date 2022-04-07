import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, useProductList } from '../../../context/context_index';
import { postCartData } from '../../../api-call/api-index';

export const CartButton = ({ id }) => {
  const { cartData, setCartData } = useCart();
  const { productList } = useProductList();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const handleCartClick = async () => {
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
    <Link to="/cart">
      <button className="btn card-go-cart-btn btn-accented">Go to Cart</button>
    </Link>
  ) : (
    <button
      onClick={handleCartClick}
      className=" btn card-cart-btn btn-outline-black"
    >
      Cart
    </button>
  );
};
