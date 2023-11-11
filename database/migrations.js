const { Client } = require('pg');
const User = require('../backend/models/User');
const Conversation = require('../backend/models/Conversation');
const Tag = require('../backend/models/Tag');
const Category = require('../backend/models/Category');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const migrate = async () => {
  try {
    await User.sync();
    await Conversation.sync();
    await Tag.sync();
    await Category.sync();
    console.log('Migration completed successfully');
  } catch (err) {
    console.error('Migration failed', err);
  } finally {
    client.end();
  }
};

migrate();