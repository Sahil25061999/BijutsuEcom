import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, SideNavbar } from './components/component_index';
import {
  HomePage,
  ProductList,
  Wishlist,
  Cart,
  Login,
  Logout,
  Signup,
  ProductPage,
} from './pages/pages_index';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
