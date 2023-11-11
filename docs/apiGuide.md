# ChatGPT Conversation Viewer Platform API Guide

This guide provides an overview of the APIs used in the ChatGPT Conversation Viewer Platform.

## Authentication API

### Authenticate User

- Endpoint: `/api/auth`
- Method: `POST`
- Body: `{ "username": "<username>", "password": "<password>" }`
- Response: `{ "token": "<JWT token>" }`
- Function: `authenticateUser` in `backend/controllers/authController.js`

## User API

### Get User

- Endpoint: `/api/users/:id`
- Method: `GET`
- Response: `{ "user": "<User Object>" }`
- Function: `getUser` in `backend/controllers/userController.js`

### Update User

- Endpoint: `/api/users/:id`
- Method: `PUT`
- Body: `{ "user": "<Updated User Object>" }`
- Response: `{ "user": "<Updated User Object>" }`
- Function: `updateUser` in `backend/controllers/userController.js`

## Conversation API

### Get Conversation

- Endpoint: `/api/conversations/:id`
- Method: `GET`
- Response: `{ "conversation": "<Conversation Object>" }`
- Function: `getConversation` in `backend/controllers/conversationController.js`

### Update Conversation

- Endpoint: `/api/conversations/:id`
- Method: `PUT`
- Body: `{ "conversation": "<Updated Conversation Object>" }`
- Response: `{ "conversation": "<Updated Conversation Object>" }`
- Function: `updateConversation` in `backend/controllers/conversationController.js`

## Admin API

### Manage User

- Endpoint: `/api/admin/users/:id`
- Method: `PUT`
- Body: `{ "user": "<Updated User Object>" }`
- Response: `{ "user": "<Updated User Object>" }`
- Function: `manageUser` in `backend/controllers/adminController.js`

## Moderator API

### Moderate Content

- Endpoint: `/api/moderator/conversations/:id`
- Method: `PUT`
- Body: `{ "conversation": "<Updated Conversation Object>" }`
- Response: `{ "conversation": "<Updated Conversation Object>" }`
- Function: `moderateContent` in `backend/controllers/moderatorController.js`

Please refer to the `backend/controllers` directory for more details on the functions mentioned above.