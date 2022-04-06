import axios from 'axios';

export const postWishlistData = async (product, token) => {
  try {
    const postWishlistResponse = await axios.post(
      '/api/user/wishlist',
      { product },
      {
        headers: { authorization: token },
      }
    );
    return postWishlistResponse;
  } catch (e) {
    console.error(e);
    return e;
  }
};
