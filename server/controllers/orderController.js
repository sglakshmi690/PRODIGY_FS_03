const Order = require('../models/Order');
 
// POST /api/orders
exports.createOrder = async (req, res) => {
  try {
    const { customerName, customerEmail, address, items, totalPrice } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    const order = new Order({ customerName, customerEmail, address, items, totalPrice });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
// GET /api/orders/:id  (used for order tracking)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
