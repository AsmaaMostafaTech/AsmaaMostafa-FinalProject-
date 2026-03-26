import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiStar, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(`https://asmaamostafa-final-project.vercel.app/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id]);

  const getCheapestStore = (stores) => {
    return stores.reduce((min, store) => store.price < min.price ? store : min);
  };

  const getMostExpensiveStore = (stores) => {
    return stores.reduce((max, store) => store.price > max.price ? store : max);
  };

  const getSavings = (stores) => {
    const cheapest = getCheapestStore(stores).price;
    const mostExpensive = getMostExpensiveStore(stores).price;
    return mostExpensive - cheapest;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="bg-card-bg rounded-xl w-full max-w-4xl h-96 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Product not found</h2>
          <Link to="/products" className="text-baby-blue hover:text-silver transition-colors duration-300">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const cheapestStore = getCheapestStore(product.stores);
  const savings = getSavings(product.stores);

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center space-x-2 text-text-secondary hover:text-baby-blue transition-colors duration-300 mb-6"
        >
          <FiArrowLeft />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="glass rounded-xl overflow-hidden">
              <img 
                src={product.images ? product.images[selectedImage] : product.image} 
                alt={product.name}
                className="w-full h-96 object-cover bg-card-bg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {(product.images || [product.image, product.image, product.image, product.image]).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === idx 
                      ? 'border-baby-blue glow-blue' 
                      : 'border-transparent hover:border-baby-blue/50'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-20 object-cover bg-card-bg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-text-secondary'}`}
                    />
                  ))}
                </div>
                <span className="text-text-secondary">
                  {product.rating} ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Best Deal Badge */}
              <div className="glass rounded-xl p-4 mb-6 border border-baby-blue">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Best Price</div>
                    <div className="text-3xl font-bold text-baby-blue">
                      ${cheapestStore.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Available at {cheapestStore.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary mb-1">You Save</div>
                    <div className="text-2xl font-bold text-green-400">
                      ${savings.toFixed(2)}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Compared to highest price
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-baby-blue text-dark-navy py-3 px-6 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue flex items-center justify-center space-x-2"
                >
                  <FiShoppingCart />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={() => addToWishlist(product)}
                  className={`glass p-3 rounded-lg hover:glow-blue transition-all duration-300 ${
                    isInWishlist(product.id) ? 'text-red-500' : 'text-text-secondary hover:text-red-500'
                  } transition-colors duration-300`}
                >
                  <FiHeart className={`text-xl ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Price Comparison Table */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Price Comparison</h2>
              <div className="glass rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-light">
                      <th className="text-left p-4 text-text-secondary">Store</th>
                      <th className="text-right p-4 text-text-secondary">Price</th>
                      <th className="text-center p-4 text-text-secondary">Status</th>
                      <th className="text-center p-4 text-text-secondary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.stores
                      .sort((a, b) => a.price - b.price)
                      .map((store, index) => (
                        <tr key={index} className="border-b border-border-light hover:bg-card-bg transition-colors duration-300">
                          <td className="p-4 text-text-primary">{store.name}</td>
                          <td className="p-4 text-right">
                            <span className={`font-bold ${
                              store.price === cheapestStore.price ? 'text-baby-blue text-lg' : 'text-text-primary'
                            }`}>
                              ${store.price.toFixed(2)}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            {store.price === cheapestStore.price ? (
                              <span className="inline-block bg-green-500 text-dark-navy px-2 py-1 rounded-full text-xs font-semibold">
                                Best Deal
                              </span>
                            ) : (
                              <span className="inline-block bg-card-bg text-text-secondary px-2 py-1 rounded-full text-xs">
                                Available
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            <a
                              href={store.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-baby-blue hover:text-silver transition-colors duration-300"
                            >
                              <span className="text-sm">Visit</span>
                              <FiExternalLink size={14} />
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Product Details</h2>
              <div className="glass rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-text-secondary text-sm mb-1">Category</div>
                    <div className="text-text-primary font-semibold">{product.category}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm mb-1">Number of Stores</div>
                    <div className="text-text-primary font-semibold">{product.stores.length}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm mb-1">Customer Rating</div>
                    <div className="text-text-primary font-semibold">{product.rating} / 5.0</div>
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm mb-1">Total Reviews</div>
                    <div className="text-text-primary font-semibold">{product.reviews.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Related Products</h2>
          <div className="text-center py-12 glass rounded-xl">
            <p className="text-text-secondary">More products like this coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
