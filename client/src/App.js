import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import Deals from './pages/Deals';
import { useCart } from './contexts/CartContext';

function AppContent() {
  const { toast, hideToast, getCartCount, getWishlistCount } = useCart();

  return (
    <div className="min-h-screen bg-dark-navy">
      <Navbar cartCount={getCartCount()} wishlistCount={getWishlistCount()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
