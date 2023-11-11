```javascript
const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    timestamp: Date
  }],
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  sentimentScore: Number
});

module.exports = mongoose.model('Conversation', ConversationSchema);
```