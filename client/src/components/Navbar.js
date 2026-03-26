import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ cartCount, wishlistCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'Deals', to: '/deals' },
    { name: 'Wishlist', to: '/wishlist' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-baby-blue hover:text-silver transition-colors duration-300 animate-glow"
          >
            Price<span className="text-silver">Finder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`relative text-gray-300 hover:text-baby-blue transition-all duration-300 group ${
                  location.pathname === link.to ? 'text-baby-blue' : ''
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-baby-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Cart & Wishlist Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-300 hover:text-baby-blue transition-all duration-300 hover:glow-blue rounded-lg"
            >
              <FiShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-baby-blue text-dark-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link 
              to="/wishlist" 
              className="relative p-2 text-gray-300 hover:text-baby-blue transition-all duration-300 hover:glow-blue rounded-lg"
            >
              <FiHeart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-baby-blue text-dark-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-baby-blue transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="glass rounded-lg p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`block py-2 text-gray-300 hover:text-baby-blue transition-colors duration-300 ${
                  location.pathname === link.to ? 'text-baby-blue' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-3 border-t border-border-light">
              <Link 
                to="/cart" 
                className="relative p-2 text-gray-300 hover:text-baby-blue transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-baby-blue text-dark-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link 
                to="/wishlist" 
                className="relative p-2 text-gray-300 hover:text-baby-blue transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiHeart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-baby-blue text-dark-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
