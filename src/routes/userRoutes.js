const express = require('express');
const { register, login, updateUser, deleteUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/:id', authenticateToken, updateUser);  // protegida
router.delete('/:id', authenticateToken, deleteUser);  // protegida

module.exports = router;
