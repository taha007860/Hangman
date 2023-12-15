import React from 'react';
import Dashes from './components/Dashes';
import "./App.css";
function App() {
  const words = ["programming", "javascript", "python", "java"];
  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <div className="container">
         <Dashes words={words} />
      </div>
    </div>
  );
}

export default App;
