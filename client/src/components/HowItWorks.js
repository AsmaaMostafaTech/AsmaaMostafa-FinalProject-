import React from 'react';
import { Search, BarChart3, Bookmark, Store, Package, DollarSign, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Search Products',
      description: 'Enter the product name or browse through categories to find what you\'re looking for.',
      icon: <Search className="text-baby-blue" size={32} />
    },
    {
      number: '2',
      title: 'Compare Prices',
      description: 'View prices from multiple e-commerce stores side by side to find the best deal.',
      icon: <BarChart3 className="text-green-400" size={32} />
    },
    {
      number: '3',
      title: 'Save & Track',
      description: 'Add items to your wishlist or cart and track price changes over time.',
      icon: <Bookmark className="text-yellow-400" size={32} />
    }
  ];

  return (
    <div className="py-20 px-4 bg-dark-navy">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-baby-blue">
          How It Works
        </h2>
        <p className="text-center text-text-secondary mb-16 max-w-2xl mx-auto">
          Getting the best prices has never been easier. Follow these simple steps to start saving money.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-baby-blue to-transparent transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="glass rounded-xl p-8 text-center hover:glow-blue transition-all duration-300 transform hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-baby-blue text-dark-navy rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-baby-blue transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Store className="text-baby-blue" size={32} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-baby-blue mb-2">50+</div>
            <div className="text-text-secondary text-sm">Stores Compared</div>
          </div>
          <div className="text-center glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Package className="text-green-400" size={32} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-baby-blue mb-2">100K+</div>
            <div className="text-text-secondary text-sm">Products Listed</div>
          </div>
          <div className="text-center glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
            <div className="flex justify-center mb-3">
              <DollarSign className="text-yellow-400" size={32} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-baby-blue mb-2">$2.5M</div>
            <div className="text-text-secondary text-sm">Saved by Users</div>
          </div>
          <div className="text-center glass rounded-xl p-6 hover:glow-blue transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Clock className="text-purple-400" size={32} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-baby-blue mb-2">24/7</div>
            <div className="text-text-secondary text-sm">Price Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
