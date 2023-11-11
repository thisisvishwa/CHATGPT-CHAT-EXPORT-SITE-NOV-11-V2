import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/actions';

const ModeratorPanel: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAction, setSelectedAction] = useState('');
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(actions.loadUsers());
  }, [dispatch]);

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleActionSelect = (event) => {
    setSelectedAction(event.target.value);
  };

  const handleActionSubmit = () => {
    if (selectedAction === 'ban') {
      dispatch(actions.banUser(selectedUser));
    } else if (selectedAction === 'suspend') {
      dispatch(actions.suspendUser(selectedUser));
    } else if (selectedAction === 'promote') {
      dispatch(actions.promoteUser(selectedUser));
    }
  };

  return (
    <div id="moderator-panel">
      <h2>Moderator Panel</h2>
      <select onChange={handleUserSelect}>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <select onChange={handleActionSelect}>
        <option value="ban">Ban</option>
        <option value="suspend">Suspend</option>
        <option value="promote">Promote to Admin</option>
      </select>
      <button onClick={handleActionSubmit}>Submit</button>
    </div>
  );
};

export default ModeratorPanel;