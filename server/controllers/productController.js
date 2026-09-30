const Product = require('../models/Product');
 
// GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const { category, sort } = req.query;
    let filter = {};
    if (category) filter.category = category;
 
    let query = Product.find(filter);
    if (sort === 'price_asc') query = query.sort({ price: 1 });
    if (sort === 'price_desc') query = query.sort({ price: -1 });
 
    const products = await query;
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
// GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
