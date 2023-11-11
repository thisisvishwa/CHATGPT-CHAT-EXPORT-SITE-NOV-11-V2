const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get user details
router.get('/:id', userController.getUser);

// Route to update user details
router.put('/:id', userController.updateUser);

// Route to delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;