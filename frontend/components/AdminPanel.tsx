import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/actions';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(actions.loadUsers());
  }, [dispatch]);

  const handleUserSelect = (userId) => {
    setSelectedUser(users.find(user => user.id === userId));
  };

  const handleUserBan = () => {
    if (selectedUser) {
      dispatch(actions.banUser(selectedUser.id));
    }
  };

  const handleUserSuspend = () => {
    if (selectedUser) {
      dispatch(actions.suspendUser(selectedUser.id));
    }
  };

  const handleUserPromote = () => {
    if (selectedUser) {
      dispatch(actions.promoteUser(selectedUser.id));
    }
  };

  return (
    <div id="admin-panel">
      <h2>Admin Panel</h2>
      <select onChange={(e) => handleUserSelect(e.target.value)}>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <button onClick={handleUserBan}>Ban User</button>
      <button onClick={handleUserSuspend}>Suspend User</button>
      <button onClick={handleUserPromote}>Promote User</button>
    </div>
  );
};

export default AdminPanel;