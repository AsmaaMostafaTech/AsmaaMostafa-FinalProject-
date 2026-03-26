import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiFilter, FiX } from 'react-icons/fi';
import { FiStar, FiChevronDown } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    sortBy: 'price-low'
  });

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      const search = searchParams.get('search');
      const category = searchParams.get('category') || filters.category;
      const minPrice = searchParams.get('minPrice') || filters.minPrice;
      const maxPrice = searchParams.get('maxPrice') || filters.maxPrice;
      const sortBy = searchParams.get('sortBy') || filters.sortBy;

      if (search) {
        const response = await fetch(`/api/products/search/${search}`);
        const data = await response.json();
        setProducts(data);
      } else {
        if (category !== 'all') params.append('category', category);
        if (minPrice) params.append('minPrice', minPrice);
        if (maxPrice) params.append('maxPrice', maxPrice);
        if (sortBy) params.append('sortBy', sortBy);

        const response = await fetch(`/api/products?${params.toString()}`);
        const data = await response.json();
        setProducts(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      minPrice: '',
      maxPrice: '',
      sortBy: 'price-low'
    });
    setSearchParams({});
  };

  const getCheapestPrice = (stores) => Math.min(...stores.map(s => s.price));
  const getCheapestStore = (stores) => stores.reduce((min, store) => store.price < min.price ? store : min);

  const categories = ['all', 'Electronics', 'Fashion', 'Home', 'Gaming'];

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
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
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-baby-blue mb-4">
            All Products
          </h1>
          <p className="text-text-secondary">
            {products.length} products found
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="md:hidden flex items-center space-x-2 glass px-4 py-2 rounded-lg mb-4"
          >
            <FiFilter />
            <span>Filters</span>
          </button>

          <div className={`glass rounded-xl p-6 ${filtersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex flex-wrap gap-4 items-end">
              {/* Category Filter */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-text-secondary text-sm mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="flex-1 min-w-[120px]">
                <label className="block text-text-secondary text-sm mb-2">Min Price</label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  placeholder="0"
                  className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                />
              </div>

              <div className="flex-1 min-w-[120px]">
                <label className="block text-text-secondary text-sm mb-2">Max Price</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  placeholder="10000"
                  className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                />
              </div>

              {/* Sort By */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-text-secondary text-sm mb-2">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full bg-card-bg border border-border-light rounded-lg px-4 py-2 text-text-primary focus:border-baby-blue focus:outline-none"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A-Z</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="px-4 py-2 border border-border-light rounded-lg text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-text-primary mb-2">No products found</h3>
            <p className="text-text-secondary mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={clearFilters}
              className="bg-baby-blue text-dark-navy px-6 py-2 rounded-lg font-semibold hover:bg-silver transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    {product.stores.length > 1 && (
                      <div className="absolute top-4 right-4 bg-baby-blue text-dark-navy px-3 py-1 rounded-full text-sm font-semibold">
                        {product.stores.length} Stores
                      </div>
                    )}
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
                        {product.rating}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary text-xs">From {cheapestStore.name}</span>
                        <span className="text-xl font-bold text-baby-blue">
                          ${cheapestPrice.toFixed(2)}
                        </span>
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
        )}
      </div>
    </div>
  );
};

export default Products;
