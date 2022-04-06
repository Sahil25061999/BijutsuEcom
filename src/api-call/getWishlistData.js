import axios from 'axios';

export const getWishlistData = async (token) => {
  try {
    const wishlistResponse = await axios.get('/api/user/wishlist', {
      headers: { authorization: token },
    });
    return wishlistResponse;
  } catch (e) {
    console.error(e);
    return e;
  }
};
