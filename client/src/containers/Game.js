import React from 'react';
import { connect } from 'react-redux';
import Flock from './Flock';
import Decks from './Decks';
import PlayerArea from './PlayerArea';
import Instructions from '../components/Instructions'
import './Game.css';

class Game extends React.Component {
  render(){
    return(
      <div>
        <Instructions phase={this.props.game.phase}/>
        <Decks/>
        <Flock />
        <PlayerArea />
      </div>
    )
  }
}


const mapStateToProps = state =>{
  console.log(state)
  return {game: state.game}
}

export default connect(mapStateToProps)(Game);