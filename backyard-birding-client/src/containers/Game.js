import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {
  render(){
    return(
      <div>
        You're in the game now! The season is: {this.props.game.season}
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return {game: state.game}
}

export default connect(mapStateToProps)(Game);