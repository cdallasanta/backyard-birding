import React from 'react';
import { connect } from 'react-redux';
import Flock from './Flock';
import Decks from './Decks';
import PlayerArea from './PlayerArea';
import './Game.css';
import { skipToFlight, showDice } from '../actions/GameActions';

class Game extends React.Component {
  componentDidUpdate(){
    if(this.props.game.phase === "chooseBird"){
      // check if there are available birds, and if there are none, set phase to flight
      let skip = true;

      this.props.flock.forEach(bird => {
        this.props.backyard.forEach(by => {
          if (bird.habitat.includes(by.type)){
            skip = false;
          }
        })
      })

      if(skip){
        this.props.skipToFlight();
        this.props.showDice();
      }
    }
  }

  render(){
    return(
      <div>
        <Decks/>
        <Flock />
        <PlayerArea />
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return {
    game: state.game,
    backyard: state.player.backyard,
    flock: state.flock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    skipToFlight: () => dispatch(skipToFlight()),
    showDice: () => dispatch(showDice())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);