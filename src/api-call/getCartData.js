import axios from 'axios';

export const getCartData = async (token) => {
  try {
    const getCartResponse = await axios('/api/user/cart', {
      headers: { authorization: token },
    });
    return getCartResponse;
  } catch (e) {
    console.error(e);
    return e.response;
  }
};
