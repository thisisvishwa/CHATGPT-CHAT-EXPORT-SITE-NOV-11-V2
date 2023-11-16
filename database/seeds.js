const mongoose = require('mongoose');
const User = require('../backend/models/User');
const Conversation = require('../backend/models/Conversation');
const Tag = require('../backend/models/Tag');
const Category = require('../backend/models/Category');

mongoose.connect('mongodb://localhost/chatgpt', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected successfully!");
});

const seedDB = async () => {
  await User.deleteMany({});
  await Conversation.deleteMany({});
  await Tag.deleteMany({});
  await Category.deleteMany({});

  const user = new User({ username: 'admin', role: 'admin' });
  await user.save();

  const conversation = new Conversation({ title: 'Sample Conversation', user: user._id });
  await conversation.save();

  const tag = new Tag({ name: 'sample', conversation: conversation._id });
  await tag.save();

  const category = new Category({ name: 'sample', conversation: conversation._id });
  await category.save();
};

seedDB().then(() => {
  mongoose.connection.close();
});