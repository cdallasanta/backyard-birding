import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewGame from './components/NewGame';
import Game from './containers/Game';
import Navbar from './components/Navbar';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Route exact path='/' component={NewGame} />
          <Route path='/game' component={Game} />
        </Router>
      </div>
    );
  }
}

export default App;
