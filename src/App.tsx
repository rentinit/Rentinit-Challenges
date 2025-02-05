// src/App.tsx

import React from 'react';
import SearchComponent from './components/SearchComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Live Search Challenge</h1>
      <SearchComponent />
    </div>
  );
};

export default App;
