import React from 'react';
import './App.css';
import CardList from './components/CardList';
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <CardProvider>
      <div className="App">
        <h1>App de lista de Cards</h1>
        <CardList />
      </div>
    </CardProvider>
  );
}

export default App;

