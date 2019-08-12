import React from 'react';
import { connect } from 'react-redux';
import SeasonCard from '../components/cards/seasonCard';
import CardBack from '../components/cards/CardBack'
import { seasonCards } from '../cards/allSeasonCards';
import { cardBacks } from '../cards/allCardBacks';
import { drawBird } from '../actions/FlockActions';
import { drawBYcard } from '../actions/HandActions';
import { nextPhase } from '../actions/GameActions';

class Decks extends React.Component {
  render(){
    return (
      <div className="top-level-container" id="decks">
        <CardBack card={cardBacks.bird} whenClicked={this.props.drawBird} phase={this.props.game.phase} nextPhase={this.props.nextPhase} />
        <SeasonCard card={seasonCards.find(c => c.name === this.props.game.season)}/>
        <CardBack card={cardBacks.backyard} whenClicked={this.props.drawBYcard} phase={this.props.game.phase} nextPhase={this.props.nextPhase} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {game: state.game}
}

const mapDispatchToProps = dispatch => {
  return {
    drawBird: () => dispatch(drawBird()),
    nextPhase: () => dispatch(nextPhase()),
    drawBYcard: () => dispatch(drawBYcard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);