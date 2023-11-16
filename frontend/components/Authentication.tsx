import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const Authentication = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token, user } = await response.json();
        localStorage.setItem('token', token);
        dispatch(actions.USER_AUTHENTICATED(user));
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="auth-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;