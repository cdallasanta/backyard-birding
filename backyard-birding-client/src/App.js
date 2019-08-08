import React from 'react';
import logo from './logo.svg';
import birdCards from './images/birdCards.js';
import wigeon from './images/birdCards/americanWigeon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            birdCards.map(bird => {
              return <img src={bird.src} alt={bird.name} key={bird.id} />
            })
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
