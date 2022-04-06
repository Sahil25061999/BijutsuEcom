import axios from 'axios';
export const getProductList = async () => {
  try {
    const productResponse = await axios.get('/api/products');
    return productResponse;
  } catch (e) {
    console.error(e);
    return e;
  }
};
