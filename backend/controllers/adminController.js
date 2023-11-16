```javascript
const User = require('../models/User');

// Function to manage users (ban, suspend, promote)
const manageUser = async (req, res) => {
    const { userId, action } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        switch (action) {
            case 'ban':
                user.status = 'banned';
                break;
            case 'suspend':
                user.status = 'suspended';
                break;
            case 'promote':
                user.role = 'admin';
                break;
            default:
                return res.status(400).json({ message: 'Invalid action' });
        }

        await user.save();
        res.status(200).json({ message: 'User status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    manageUser
};
```