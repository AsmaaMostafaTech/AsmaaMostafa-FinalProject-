import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products?sortBy=rating');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      // Get top 6 products
      setProducts(products.slice(0, 6));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const getCheapestPrice = (stores) => {
    return Math.min(...stores.map(s => s.price));
  };

  const getCheapestStore = (stores) => {
    return stores.reduce((min, store) => store.price < min.price ? store : min);
  };

  if (loading) {
    return (
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-baby-blue">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-xl p-6 animate-pulse">
                <div className="bg-card-bg rounded-lg h-48 mb-4"></div>
                <div className="bg-card-bg rounded h-4 mb-2"></div>
                <div className="bg-card-bg rounded h-4 w-3/4 mb-4"></div>
                <div className="bg-card-bg rounded h-6 w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-dark-navy to-card-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-baby-blue">
          Featured Products
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of the best deals available right now
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const cheapestPrice = getCheapestPrice(product.stores);
            const cheapestStore = getCheapestStore(product.stores);
            
            return (
              <div key={product.id} className="glass rounded-xl overflow-hidden hover:glow-blue transition-all duration-300 transform hover:scale-105 group">
                <div className="relative">
                  <Link to={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover bg-card-bg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    />
                  </Link>
                  <div className="absolute top-4 right-4 bg-baby-blue text-dark-navy px-3 py-1 rounded-full text-sm font-semibold">
                    Best Deal
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-baby-blue transition-colors duration-300 line-clamp-2">
                    <Link to={`/products/${product.id}`} className="hover:text-baby-blue transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-text-secondary'}`}
                        />
                      ))}
                    </div>
                    <span className="text-text-secondary text-sm ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm">From {cheapestStore.name}</span>
                      <span className="text-2xl font-bold text-baby-blue">
                        ${cheapestPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary">
                      Compare {product.stores.length} stores
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link 
                      to={`/products/${product.id}`}
                      className="flex-1 bg-baby-blue text-dark-navy py-2 px-4 rounded-lg text-center font-semibold hover:bg-silver transition-all duration-300"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => addToCart(product)}
                      className="p-2 glass rounded-lg hover:glow-blue transition-all duration-300"
                    >
                      <FiShoppingCart className="text-text-secondary hover:text-baby-blue transition-colors duration-300" />
                    </button>
                    <button 
                      onClick={() => addToWishlist(product)}
                      className={`p-2 glass rounded-lg hover:glow-blue transition-all duration-300 ${
                        isInWishlist(product.id) ? 'text-red-500' : 'text-text-secondary hover:text-red-500'
                      } transition-colors duration-300`}
                    >
                      <FiHeart className={isInWishlist(product.id) ? 'fill-current' : ''} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-block bg-baby-blue text-dark-navy px-8 py-3 rounded-full font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
