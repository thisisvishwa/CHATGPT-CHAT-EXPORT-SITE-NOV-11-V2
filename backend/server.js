```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('./utils/rateLimiter');

const authRoutes = require('./routes/auth');
const conversationRoutes = require('./routes/conversations');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const moderatorRoutes = require('./routes/moderator');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit.limitRate);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/moderator', moderatorRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```