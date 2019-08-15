import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewGame from './components/NewGame';
import Game from './containers/Game';
import GameOver from './components/GameOver';
import HighScores from './components/HighScores';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={NewGame} />
          <Route path='/game' component={Game} />
          <Route path='/game_over' component={GameOver} />
          <Route path='/high_scores' component={HighScores} />
          <Route component={NotFound} />
        </Router>
      </div>
    );
  }
}

export default App;
