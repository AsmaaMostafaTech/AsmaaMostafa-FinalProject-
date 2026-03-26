import React, { useState } from 'react';
import { Search, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-baby-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-silver rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-baby-blue rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-baby-blue to-silver bg-clip-text text-transparent animate-pulse-slow">
          Find the Best Prices
          <br />
          <span className="text-4xl md:text-6xl">Across the Web</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Smart product comparison platform that searches multiple e-commerce websites 
          to bring you the best available prices instantly.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands, or categories..."
              className="w-full px-6 py-4 pr-16 text-lg glass rounded-full text-text-primary placeholder-text-secondary border border-border-light focus:border-baby-blue focus:outline-none focus:glow-blue transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-baby-blue text-dark-navy rounded-full hover:bg-silver transition-all duration-300 hover:glow-blue"
            >
              <Search size={20} />
            </button>
          </div>
        </form>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Search className="text-baby-blue" size={40} />
            </div>
            <h3 className="text-xl font-semibold text-baby-blue mb-2">Smart Search</h3>
            <p className="text-text-secondary">Compare prices across multiple stores instantly</p>
          </div>
          <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <TrendingUp className="text-green-400" size={40} />
            </div>
            <h3 className="text-xl font-semibold text-baby-blue mb-2">Best Deals</h3>
            <p className="text-text-secondary">Find the lowest prices automatically highlighted</p>
          </div>
          <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-yellow-400" size={40} />
            </div>
            <h3 className="text-xl font-semibold text-baby-blue mb-2">Real-time Updates</h3>
            <p className="text-text-secondary">Always get the latest prices and availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
