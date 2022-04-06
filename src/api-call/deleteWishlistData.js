import axios from 'axios';

export const deleteWishlistData = async (id, token) => {
  try {
    const deleteWishlistResponse = await axios.delete(
      `/api/user/wishlist/${id}`,
      {
        headers: { authorization: token },
      }
    );
    return deleteWishlistResponse;
  } catch (e) {
    console.error(e);
    return e.response;
  }
};
