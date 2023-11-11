```tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    dispatch(actions.changeTheme(newTheme));
  };

  return (
    <div id="theme-switcher">
      <button onClick={handleThemeChange}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
```