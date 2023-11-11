```javascript
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'User is not an admin' });
  }
  next();
};

router.use(isAdmin);

// Route to manage users (ban, suspend, promote)
router.put('/users/:id', adminController.manageUser);

module.exports = router;
```