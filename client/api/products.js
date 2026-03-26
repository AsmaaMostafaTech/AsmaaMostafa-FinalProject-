// Vercel Serverless Function for API
const products = require('./products-data');

module.exports = (req, res) => {
  const { category, minPrice, maxPrice, sortBy } = req.query;
  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Filter by price range
  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => 
      Math.min(...p.stores.map(s => s.price)) >= parseFloat(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => 
      Math.min(...p.stores.map(s => s.price)) <= parseFloat(maxPrice)
    );
  }

  // Sort products
  if (sortBy) {
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => Math.min(...a.stores.map(s => s.price)) - Math.min(...b.stores.map(s => s.price)));
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => Math.min(...b.stores.map(s => s.price)) - Math.min(...a.stores.map(s => s.price)));
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  res.json(filteredProducts);
};
