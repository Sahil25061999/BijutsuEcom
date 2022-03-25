import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProductList from './pages/productlist/ProductList';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        {/* <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
