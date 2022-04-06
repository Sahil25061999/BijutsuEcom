import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  FilterProvider,
  WishlistProvider,
  CartProvider,
  TokenProvider,
  ProductListProvider,
} from './context/context_index';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TokenProvider>
        <ProductListProvider>
          <CartProvider>
            <WishlistProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </WishlistProvider>
          </CartProvider>
        </ProductListProvider>
      </TokenProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
