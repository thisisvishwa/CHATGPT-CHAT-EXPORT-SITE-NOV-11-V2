const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

// Get all conversations
router.get('/', conversationController.getConversations);

// Get a specific conversation by ID
router.get('/:id', conversationController.getConversation);

// Create a new conversation
router.post('/', conversationController.createConversation);

// Update a conversation
router.put('/:id', conversationController.updateConversation);

// Delete a conversation
router.delete('/:id', conversationController.deleteConversation);

module.exports = router;