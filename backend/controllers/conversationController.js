```javascript
const Conversation = require('../models/Conversation');

// Get a single conversation by ID
exports.getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.id);
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }
    res.json(conversation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a conversation
exports.updateConversation = async (req, res) => {
  try {
    const updatedConversation = await Conversation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedConversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }
    res.json(updatedConversation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a conversation
exports.deleteConversation = async (req, res) => {
  try {
    const deletedConversation = await Conversation.findByIdAndDelete(req.params.id);
    if (!deletedConversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }
    res.json({ message: 'Conversation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```