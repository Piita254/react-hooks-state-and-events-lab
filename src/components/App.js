// File path: src/components/App.js

import React, { useState } from 'react';
import ShoppingList from './ShoppingList'; // Assuming you have this component
import itemData from '../data/items'; // Assuming you have this data


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleEvent = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleEvent}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
};

export default App;
