import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FiHeart, FiShoppingCart, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';

const Wishlist = () => {
  const { 
    wishlist, 
    removeFromWishlist, 
    moveToCart, 
    getWishlistCount,
    isInCart 
  } = useCart();

  const getCheapestPrice = (stores) => Math.min(...stores.map(s => s.price));
  const getCheapestStore = (stores) => stores.reduce((min, store) => store.price < min.price ? store : min);

  if (getWishlistCount() === 0) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">❤️</div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Your wishlist is empty</h2>
          <p className="text-text-secondary mb-8">
            Start adding products you love to keep track of them here
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center space-x-2 bg-baby-blue text-dark-navy px-6 py-3 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue"
          >
            <FiArrowLeft />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-baby-blue mb-4">
            My Wishlist
          </h1>
          <p className="text-text-secondary">
            {getWishlistCount()} {getWishlistCount() === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => {
            const cheapestPrice = getCheapestPrice(product.stores);
            const cheapestStore = getCheapestStore(product.stores);
            const inCart = isInCart(product.id);
            
            return (
              <div key={product.id} className="glass rounded-xl overflow-hidden hover:glow-blue transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover bg-card-bg"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 glass rounded-lg hover:bg-red-500/20 transition-all duration-300 group"
                  >
                    <FiHeart className="text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  {inCart && (
                    <div className="absolute top-4 left-4 bg-green-500 text-dark-navy px-3 py-1 rounded-full text-xs font-semibold">
                      In Cart
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <Link 
                    to={`/products/${product.id}`}
                    className="block mb-3"
                  >
                    <h3 className="text-lg font-semibold text-text-primary hover:text-baby-blue transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  
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
                      {product.rating}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm">From {cheapestStore.name}</span>
                      <span className="text-xl font-bold text-baby-blue">
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
                      className="flex-1 bg-card-bg text-text-primary py-2 px-3 rounded-lg text-center text-sm font-semibold hover:bg-baby-blue hover:text-dark-navy transition-all duration-300"
                    >
                      View Details
                    </Link>
                    {!inCart ? (
                      <button 
                        onClick={() => moveToCart(product.id)}
                        className="flex-1 bg-baby-blue text-dark-navy py-2 px-3 rounded-lg text-center text-sm font-semibold hover:bg-silver transition-all duration-300 flex items-center justify-center"
                      >
                        <FiShoppingCart className="mr-1" />
                        Add to Cart
                      </button>
                    ) : (
                      <Link 
                        to="/cart"
                        className="flex-1 bg-green-500 text-dark-navy py-2 px-3 rounded-lg text-center text-sm font-semibold hover:bg-green-600 transition-all duration-300"
                      >
                        View in Cart
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-12 glass rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-baby-blue mb-2">
                ${wishlist.reduce((total, product) => {
                  return total + getCheapestPrice(product.stores);
                }, 0).toFixed(2)}
              </div>
              <div className="text-text-secondary text-sm">Total Wishlist Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                ${wishlist.reduce((total, product) => {
                  const maxPrice = Math.max(...product.stores.map(s => s.price));
                  const minPrice = Math.min(...product.stores.map(s => s.price));
                  return total + (maxPrice - minPrice);
                }, 0).toFixed(2)}
              </div>
              <div className="text-text-secondary text-sm">Potential Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-silver mb-2">
                {wishlist.reduce((total, product) => total + product.stores.length, 0)}
              </div>
              <div className="text-text-secondary text-sm">Stores to Compare</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => {
                wishlist.forEach(product => {
                  if (!isInCart(product.id)) {
                    moveToCart(product.id);
                  }
                });
              }}
              className="flex-1 bg-baby-blue text-dark-navy py-3 px-6 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue"
            >
              Add All to Cart
            </button>
            <Link 
              to="/products"
              className="flex-1 glass py-3 px-6 rounded-lg font-semibold text-center hover:glow-blue transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
