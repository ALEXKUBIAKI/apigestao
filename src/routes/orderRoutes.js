const express = require('express');
const { createOrder, updateOrder, deleteOrder, getOrders } = require('../controllers/orderController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createOrder);
router.put('/:id', authenticateToken, updateOrder);
router.delete('/:id', authenticateToken, deleteOrder);
router.get('/', getOrders);  // Unica desprotegida

module.exports = router;
