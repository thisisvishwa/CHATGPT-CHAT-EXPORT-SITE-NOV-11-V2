```tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const ConversationViewer = () => {
  const dispatch = useDispatch();
  const conversation = useSelector(state => state.conversation);

  useEffect(() => {
    dispatch(actions.loadConversation());
  }, [dispatch]);

  return (
    <div>
      {conversation.loading ? (
        <p>Loading...</p>
      ) : conversation.error ? (
        <p>Error: {conversation.error}</p>
      ) : (
        <div>
          {conversation.data.map((message, index) => (
            <div key={index}>
              <p>{message.user}: {message.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversationViewer;
```