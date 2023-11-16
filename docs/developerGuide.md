# Developer Guide

## Project Overview

This guide will help you understand and contribute to the ChatGPT Conversation Viewer Platform. This platform is designed to be highly scalable, secure, and feature-rich for displaying ChatGPT conversations.

## Getting Started

1. Clone the repository to your local machine.
2. Install the necessary dependencies with `npm install`.
3. Start the development server with `npm run dev`.

## Directory Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built with Next.js, React, TypeScript, and Redux for state management. The main entry point is `frontend/pages/index.tsx` and the application-wide settings are in `frontend/pages/_app.tsx`.

Components are located in the `frontend/components` directory. Each component has its own file, such as `ConversationViewer.tsx` for the conversation viewer component.

Redux store, actions, and reducers are located in the `frontend/redux` directory.

### Backend

The backend is built with Node.js and Express.js. The main entry point is `backend/server.js`.

Routes are located in the `backend/routes` directory. Each route has its own file, such as `auth.js` for authentication routes.

Controllers are located in the `backend/controllers` directory. Each controller has its own file, such as `authController.js` for authentication-related logic.

Models are located in the `backend/models` directory. Each model has its own file, such as `User.js` for the user model.

Utilities are located in the `backend/utils` directory. Each utility has its own file, such as `encryption.js` for data encryption utilities.

Tests are located in the `backend/tests` directory. Each test has its own file, such as `auth.test.js` for authentication tests.

## Database

The database is either PostgreSQL or MongoDB, with Redis for caching. Configuration is located in `database/config.js`. Migrations and seeds are located in `database/migrations.js` and `database/seeds.js` respectively.

## Testing

Tests are written using Jest, React Testing Library, and Cypress. Run tests with `npm run test`.

## Documentation

Documentation is located in the `docs` directory. This includes user guides, API guides, testing guides, and operational guides.

## Contributing

Before contributing, please ensure you are familiar with the project structure and technologies used. Always follow the established naming conventions and code style.

## Final Notes

This project is a collaborative effort. We appreciate your contribution to making the ChatGPT Conversation Viewer Platform better.