import axios from 'axios';
export const postCartData = async (token, product) => {
  try {
    const postCartResponse = await axios.post(
      `/api/user/cart/`,
      { product },
      { headers: { authorization: token } }
    );
    return postCartResponse;
  } catch (e) {
    console.error(e);
    return e.response;
  }
};
