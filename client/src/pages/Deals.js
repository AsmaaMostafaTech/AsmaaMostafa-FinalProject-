import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FiStar, FiTag, FiTrendingUp, FiClock } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const Deals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('hot');
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  useEffect(() => {
    fetchDeals();
  }, []);

  const fetchDeals = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products?sortBy=price-low');
      if (!response.ok) {
        throw new Error('Failed to fetch deals');
      }
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching deals:', error);
      setLoading(false);
    }
  };

  const getCheapestPrice = (stores) => Math.min(...stores.map(s => s.price));
  const getCheapestStore = (stores) => stores.reduce((min, store) => store.price < min.price ? store : min);
  const getSavings = (stores) => {
    const cheapest = Math.min(...stores.map(s => s.price));
    const mostExpensive = Math.max(...stores.map(s => s.price));
    return mostExpensive - cheapest;
  };

  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'hot':
        return products.filter(p => getSavings(p.stores) > 50);
      case 'trending':
        return products.filter(p => p.rating >= 4.5);
      case 'new':
        return products.slice(0, 4);
      default:
        return products;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-baby-blue mb-4">
            Hot Deals 🔥
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover the best deals and biggest savings across all categories. 
            These products offer exceptional value compared to other stores.
          </p>
        </div>

        {/* Deal Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'hot', label: 'Hot Deals', icon: FiTag, count: products.filter(p => getSavings(p.stores) > 50).length },
            { id: 'trending', label: 'Trending', icon: FiTrendingUp, count: products.filter(p => p.rating >= 4.5).length },
            { id: 'new', label: 'New Arrivals', icon: FiClock, count: 4 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`glass rounded-xl px-6 py-3 flex items-center space-x-2 transition-all duration-300 hover:glow-blue ${
                activeTab === tab.id ? 'ring-2 ring-baby-blue bg-baby-blue/10' : ''
              }`}
            >
              <tab.icon className="text-baby-blue" />
              <span className="font-semibold text-text-primary">{tab.label}</span>
              <span className="bg-card-bg px-2 py-1 rounded-full text-xs text-text-secondary">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="glass rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">
                ${filteredProducts.reduce((total, p) => total + getSavings(p.stores), 0).toFixed(0)}
              </div>
              <div className="text-sm text-text-secondary">Total Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-baby-blue mb-1">
                {filteredProducts.length}
              </div>
              <div className="text-sm text-text-secondary">Deal Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                {filteredProducts.filter(p => p.rating >= 4.5).length}
              </div>
              <div className="text-sm text-text-secondary">Top Rated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-silver mb-1">
                {filteredProducts.reduce((total, p) => total + p.stores.length, 0)}
              </div>
              <div className="text-sm text-text-secondary">Store Options</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏷️</div>
            <h3 className="text-2xl font-semibold text-text-primary mb-2">No deals found</h3>
            <p className="text-text-secondary mb-6">Check back later for new deals and promotions</p>
            <Link 
              to="/products"
              className="bg-baby-blue text-dark-navy px-6 py-2 rounded-lg font-semibold hover:bg-silver transition-all duration-300"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const cheapestPrice = getCheapestPrice(product.stores);
              const cheapestStore = getCheapestStore(product.stores);
              const savings = getSavings(product.stores);
              const maxPrice = Math.max(...product.stores.map(s => s.price));
              
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
                    <div className="absolute top-4 left-4 bg-green-500 text-dark-navy px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${savings.toFixed(0)}
                    </div>
                    <div className="absolute top-4 right-4 bg-baby-blue text-dark-navy px-3 py-1 rounded-full text-sm font-semibold">
                      {Math.round((savings / maxPrice) * 100)}% OFF
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
                            className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-text-secondary'}`}
                          />
                        ))}
                      </div>
                      <span className="text-text-secondary text-xs ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary text-xs">From {cheapestStore.name}</span>
                        <div className="text-right">
                          <div className="text-xl font-bold text-baby-blue">
                            ${cheapestPrice.toFixed(2)}
                          </div>
                          <div className="text-xs text-text-secondary line-through">
                            ${maxPrice.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {product.stores.slice(0, 3).map((store, idx) => (
                          <div key={idx} className="text-xs text-text-secondary">
                            ${store.price.toFixed(2)}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link 
                        to={`/products/${product.id}`}
                        className="flex-1 bg-baby-blue text-dark-navy py-2 px-3 rounded-lg text-center text-sm font-semibold hover:bg-silver transition-all duration-300"
                      >
                        View Deal
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
        )}

        {/* Newsletter Section */}
        <div className="mt-16 glass rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Never Miss a Deal</h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the hottest deals delivered directly to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card-bg border border-border-light rounded-lg px-4 py-3 text-text-primary focus:border-baby-blue focus:outline-none"
            />
            <button className="bg-baby-blue text-dark-navy px-6 py-3 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
