// Vercel Serverless Function for single product
const products = require('./products-data');

module.exports = (req, res) => {
  const { id } = req.query;
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  res.json(product);
};
