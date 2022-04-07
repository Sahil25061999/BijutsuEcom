import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { getProductList } from '../api-call/api-index';
const ProductListContext = createContext();

const reducerFunct = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_PRODUCT_LIST':
      return [...action.payload];
    default:
      return [...state];
  }
};

const ProductListProvider = ({ children }) => {
  const [productList, productListDispatch] = useReducer(reducerFunct, []);

  useEffect(() => {
    (async () => {
      const response = await getProductList();
      if (response.status === 200) {
        productListDispatch({
          type: 'INITIALIZE_PRODUCT_LIST',
          payload: response.data.products,
        });
      }
    })();
  }, []);
  return (
    <ProductListContext.Provider value={{ productList, productListDispatch }}>
      {children}
    </ProductListContext.Provider>
  );
};

const useProductList = () => useContext(ProductListContext);

export { useProductList, ProductListProvider };
