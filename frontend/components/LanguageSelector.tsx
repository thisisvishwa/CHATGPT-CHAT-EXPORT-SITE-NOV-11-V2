```tsx
import React, { useState } from 'react';

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    // TODO: Implement functionality to change the language of the app
  };

  return (
    <div id="language-selector">
      <label htmlFor="language">Language:</label>
      <select name="language" id="language" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="pt">Portuguese</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
```