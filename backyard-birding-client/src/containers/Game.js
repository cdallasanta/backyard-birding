import React from 'react';
import { connect } from 'react-redux';
import { seasonCards } from '../cards/seasonCards';

class Game extends React.Component {
  render(){
    return(
      <div>
        You're in the game now! The season is: {this.props.game.season}
        <img src={seasonCards.find(s => s.name === this.props.game.season)} alt="testing" />
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return {game: state.game}
}

export default connect(mapStateToProps)(Game);