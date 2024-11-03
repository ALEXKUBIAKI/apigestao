const orderRepository = require('../repositories/orderRepository');

exports.createOrder = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const order = await orderRepository.createOrder({ productId, quantity });
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;
    const order = await orderRepository.updateOrder(id, { productId, quantity });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    await orderRepository.deleteOrder(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await orderRepository.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
