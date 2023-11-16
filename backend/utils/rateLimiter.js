```javascript
const rateLimit = require('express-rate-limit');

// Define rate limit rules
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Function to apply rate limit to a route
const limitRate = (router) => {
  router.use('/api/', apiLimiter);
};

module.exports = limitRate;
```