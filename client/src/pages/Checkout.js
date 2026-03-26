import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FiShoppingCart, FiArrowLeft, FiCheck } from 'react-icons/fi';

const Checkout = () => {
  const { cart, getCartTotal, getCartCount, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (getCartCount() === 0 && !orderComplete) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Your cart is empty</h2>
          <p className="text-text-secondary mb-8">
            Add some products to your cart before checkout
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

  if (orderComplete) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center max-w-md glass rounded-xl p-8">
          <div className="text-6xl mb-6 text-green-400">✓</div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Order Complete!</h2>
          <p className="text-text-secondary mb-6">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <Link 
              to="/products"
              className="block w-full bg-baby-blue text-dark-navy py-3 px-6 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue"
            >
              Continue Shopping
            </Link>
            <Link 
              to="/"
              className="block w-full glass py-3 px-6 rounded-lg font-semibold hover:glow-blue transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/cart"
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-baby-blue transition-colors duration-300 mb-4"
          >
            <FiArrowLeft />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-baby-blue">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-text-primary mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-text-primary mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-text-primary mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={handleInputChange}
                      className="text-baby-blue"
                    />
                    <label className="text-text-primary">Credit Card</label>
                  </div>
                  
                  {formData.paymentMethod === 'credit' && (
                    <div className="space-y-4 pl-6">
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-text-secondary text-sm mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-text-secondary text-sm mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-baby-blue text-dark-navy py-3 px-6 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-text-primary mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => {
                  const cheapestPrice = Math.min(...item.stores.map(s => s.price));
                  return (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded bg-card-bg"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-text-primary line-clamp-1">
                          {item.name}
                        </div>
                        <div className="text-xs text-text-secondary">
                          Qty: {item.quantity} × ${cheapestPrice.toFixed(2)}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-text-primary">
                        ${(cheapestPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Price Breakdown */}
              <div className="border-t border-border-light pt-4 space-y-3">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border-light pt-3">
                  <div className="flex justify-between text-lg font-bold text-text-primary">
                    <span>Total</span>
                    <span className="text-baby-blue">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Security Note */}
              <div className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2 text-green-400 text-sm">
                  <FiCheck />
                  <span>Secure checkout powered by SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
