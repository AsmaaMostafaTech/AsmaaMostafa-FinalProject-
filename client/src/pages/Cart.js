import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FiShoppingCart, FiTrash2, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getCartTotal,
    getCartCount
  } = useCart();

  const getCheapestPrice = (stores) => Math.min(...stores.map(s => s.price));
  const getCheapestStore = (stores) => stores.reduce((min, store) => store.price < min.price ? store : min);

  if (getCartCount() === 0) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Your cart is empty</h2>
          <p className="text-text-secondary mb-8">
            Add some products to your cart to get started
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
            Shopping Cart
          </h1>
          <p className="text-text-secondary">
            {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const cheapestPrice = getCheapestPrice(item.stores);
              const cheapestStore = getCheapestStore(item.stores);
              const itemTotal = cheapestPrice * item.quantity;
              
              return (
                <div key={item.id} className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg bg-card-bg"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <Link 
                            to={`/products/${item.id}`}
                            className="text-lg font-semibold text-text-primary hover:text-baby-blue transition-colors duration-300 mb-2 block"
                          >
                            {item.name}
                          </Link>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <FiStar 
                                  key={i} 
                                  className={`text-xs ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-text-secondary'}`}
                                />
                              ))}
                            </div>
                            <span className="text-text-secondary text-sm">
                              {item.rating}
                            </span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-text-secondary hover:text-red-500 transition-colors duration-300"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-4 sm:mb-0">
                          <div className="text-sm text-text-secondary mb-1">
                            From {cheapestStore.name}
                          </div>
                          <div className="text-xl font-bold text-baby-blue">
                            ${cheapestPrice.toFixed(2)}
                          </div>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 glass rounded hover:bg-card-bg transition-colors duration-300"
                            >
                              <FiMinus size={16} />
                            </button>
                            <span className="w-12 text-center font-semibold text-text-primary">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 glass rounded hover:bg-card-bg transition-colors duration-300"
                            >
                              <FiPlus size={16} />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm text-text-secondary">Total</div>
                            <div className="text-lg font-bold text-text-primary">
                              ${itemTotal.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full glass rounded-xl p-4 text-text-secondary hover:text-red-500 transition-colors duration-300"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal ({getCartCount()} items)</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Estimated Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-border-light pt-3">
                  <div className="flex justify-between text-lg font-bold text-text-primary">
                    <span>Total</span>
                    <span className="text-baby-blue">
                      ${(getCartTotal() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link 
                  to="/checkout"
                  className="w-full bg-baby-blue text-dark-navy py-3 px-6 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue block text-center"
                >
                  Proceed to Checkout
                </Link>
                <Link 
                  to="/products"
                  className="w-full glass py-3 px-6 rounded-lg font-semibold text-center hover:glow-blue transition-all duration-300 block"
                >
                  Continue Shopping
                </Link>
              </div>
              
              {/* Savings Info */}
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-green-400 text-sm font-semibold mb-1">
                  You're saving money!
                </div>
                <div className="text-text-secondary text-xs">
                  By comparing prices across multiple stores
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
