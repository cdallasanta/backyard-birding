import React from 'react';
import { connect } from 'react-redux';
import SeasonCard from '../components/cards/seasonCard';
import BackyardCard from '../components/cards/backyardCard';
import BirdCard from '../components/cards/birdCard';
import { seasonCards } from '../cards/allSeasonCards';
import { cardBacks } from '../cards/allCardBacks';

class Decks extends React.Component {
  render(){
    return (
      <div className="decks" id="decks">
        <BirdCard card={cardBacks.bird} />
        <SeasonCard card={seasonCards.find(c => c.name === this.props.game.season)}/>
        <BackyardCard card={cardBacks.backyard} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {game: state.game}
}

export default connect(mapStateToProps)(Decks);