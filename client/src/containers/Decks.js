import React from 'react';
import { connect } from 'react-redux';
import SeasonCard from '../components/cards/seasonCard';
import CardBack from '../components/cards/CardBack'
import { seasonCards } from '../cards/allSeasonCards';
import { cardBacks } from '../cards/allCardBacks';
import { drawBird } from '../actions/FlockActions';

class Decks extends React.Component {
  render(){
    return (
      <div className="decks" id="decks">
        <CardBack card={cardBacks.bird} drawBird={this.props.drawBird} />
        <SeasonCard card={seasonCards.find(c => c.name === this.props.game.season)}/>
        <CardBack card={cardBacks.backyard} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {game: state.game}
}

const mapDispatchToProps = dispatch => {
  return {drawBird: () => dispatch(drawBird())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);