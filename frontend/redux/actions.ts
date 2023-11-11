```typescript
// frontend/redux/actions.ts

export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const CONVERSATION_LOADED = 'CONVERSATION_LOADED';
export const USER_UPDATED = 'USER_UPDATED';
export const CONVERSATION_UPDATED = 'CONVERSATION_UPDATED';

export const userAuthenticated = (user) => ({
  type: USER_AUTHENTICATED,
  payload: user,
});

export const conversationLoaded = (conversation) => ({
  type: CONVERSATION_LOADED,
  payload: conversation,
});

export const userUpdated = (user) => ({
  type: USER_UPDATED,
  payload: user,
});

export const conversationUpdated = (conversation) => ({
  type: CONVERSATION_UPDATED,
  payload: conversation,
});
```