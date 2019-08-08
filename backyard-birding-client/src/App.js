import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewGame from './components/NewGame';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path='/' component={NewGame.js} />
      </Router>
    </div>
  );
}

export default App;
