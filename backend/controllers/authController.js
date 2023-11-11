```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate user input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide an email and password' });
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
```