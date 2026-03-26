import React from 'react';
import { Target, TrendingUp, Users, Award, Zap, Search, BarChart3, Bell, Heart, Smartphone, Scale, DollarSign } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Target className="text-baby-blue" size={32} />, label: 'Products Compared', value: '100K+', description: 'Across multiple categories' },
    { icon: <TrendingUp className="text-green-400" size={32} />, label: 'Money Saved', value: '$2.5M+', description: 'By our smart users' },
    { icon: <Users className="text-yellow-400" size={32} />, label: 'Active Users', value: '50K+', description: 'Finding best deals daily' },
    { icon: <Award className="text-purple-400" size={32} />, label: 'Partner Stores', value: '50+', description: 'Top e-commerce platforms' }
  ];

  const features = [
    {
      title: 'Real-time Price Tracking',
      description: 'Our advanced algorithms continuously monitor prices across multiple stores to ensure you always get the most current information.',
      icon: <Zap className="text-yellow-400" size={32} />
    },
    {
      title: 'Smart Price Comparison',
      description: 'Compare prices from different retailers side by side, with the best deals automatically highlighted for your convenience.',
      icon: <Search className="text-baby-blue" size={32} />
    },
    {
      title: 'Price History & Trends',
      description: 'View historical price data and trends to make informed purchasing decisions and know when to buy.',
      icon: <BarChart3 className="text-green-400" size={32} />
    },
    {
      title: 'Personalized Alerts',
      description: 'Set up price alerts for your favorite products and get notified when prices drop to your desired level.',
      icon: <Bell className="text-purple-400" size={32} />
    },
    {
      title: 'Wishlist Management',
      description: 'Save products you love and track their prices over time. Move items to cart when the price is right.',
      icon: <Heart className="text-red-400" size={32} />
    },
    {
      title: 'Mobile Friendly',
      description: 'Access Price Finder on any device. Our responsive design ensures a seamless experience on desktop, tablet, and mobile.',
      icon: <Smartphone className="text-cyan-400" size={32} />
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      description: 'Former e-commerce executive with 10+ years of experience in retail technology.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      description: 'Full-stack developer specializing in price comparison algorithms and data analytics.'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      description: 'Product design expert focused on creating intuitive user experiences for complex data.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-baby-blue mb-6">
            About Price Finder
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make online shopping smarter and more affordable. 
            Our platform helps millions of users find the best deals across the web, 
            saving time and money with every purchase.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center hover:glow-blue transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-baby-blue mb-1">{stat.label}</div>
              <div className="text-xs text-text-secondary">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="glass rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                At Price Finder, we believe that everyone deserves access to the best possible prices 
                when shopping online. Our mission is to democratize price comparison, making it easy 
                for consumers to make informed purchasing decisions without spending hours searching 
                across multiple websites.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                We're committed to transparency, accuracy, and user empowerment. Every feature we build 
                is designed to help you save money and time while discovering the best products for your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-baby-blue mb-1">100%</div>
                  <div className="text-sm text-text-secondary">Free to Use</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-baby-blue mb-1">24/7</div>
                  <div className="text-sm text-text-secondary">Price Updates</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-20 left-20 w-72 h-72 bg-baby-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
              <div className="absolute bottom-20 right-20 w-56 h-56 bg-silver rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
              <div className="relative glass rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Smart Shopping</h3>
                <p className="text-text-secondary">
                  Making every dollar count with intelligent price comparison
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Why Choose Price Finder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:glow-blue transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="glass rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-baby-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="text-baby-blue" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-baby-blue mb-2">Search & Discover</h3>
              <p className="text-text-secondary text-sm">
                Search for any product and instantly see prices from multiple stores
              </p>
            </div>
            <div className="text-center">
              <div className="bg-baby-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="text-green-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-baby-blue mb-2">Compare & Analyze</h3>
              <p className="text-text-secondary text-sm">
                Compare prices, features, and reviews to make the best choice
              </p>
            </div>
            <div className="text-center">
              <div className="bg-baby-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-yellow-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-baby-blue mb-2">Save & Purchase</h3>
              <p className="text-text-secondary text-sm">
                Buy at the best price or save to wishlist for later
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover:glow-blue transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-baby-blue to-silver rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-dark-navy font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{member.name}</h3>
                <div className="text-baby-blue font-semibold mb-3">{member.role}</div>
                <p className="text-text-secondary text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-xl p-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Start Saving?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who are already saving money with Price Finder. 
            Start comparing prices today and see the difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products"
              className="bg-baby-blue text-dark-navy px-8 py-3 rounded-lg font-semibold hover:bg-silver transition-all duration-300 hover:glow-blue inline-block"
            >
              Browse Products
            </a>
            <a 
              href="/contact"
              className="glass px-8 py-3 rounded-lg font-semibold hover:glow-blue transition-all duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
