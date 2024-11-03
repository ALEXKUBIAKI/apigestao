const express = require('express');
const { createProduct, updateProduct, deleteProduct, getProducts } = require('../controllers/productController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createProduct);
router.put('/:id', authenticateToken, updateProduct);
router.delete('/:id', authenticateToken, deleteProduct);
router.get('/', getProducts);  // Unica desprotegida

module.exports = router;
