import axios from 'axios';

export const postCartQuantity = async (id, token, value) => {
  try {
    const cartQuantityResponse = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: { type: value },
      },
      { headers: { authorization: token } }
    );
    return cartQuantityResponse;
  } catch (e) {
    console.error(e);
    return e.response;
  }
};
