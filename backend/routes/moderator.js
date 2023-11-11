```javascript
const express = require('express');
const router = express.Router();
const moderatorController = require('../controllers/moderatorController');

// Middleware to check if the user is a moderator
const checkModerator = (req, res, next) => {
  if (req.user.role !== 'moderator') {
    return res.status(403).json({ error: 'User is not a moderator' });
  }
  next();
};

router.use(checkModerator);

// Route to moderate a conversation
router.post('/moderate', moderatorController.moderateContent);

module.exports = router;
```