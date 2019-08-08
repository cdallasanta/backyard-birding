import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NewGame from './components/NewGame';
import Navbar from './components/Navbar';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Route exact path='/' component={NewGame} />
        </Router>
        {this.props.game.selectedSeason}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {game: state.game}
}

export default connect(mapStateToProps)(App);
