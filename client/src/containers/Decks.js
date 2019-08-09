import React from 'react';
import { connect } from 'react-redux';
import SeasonCard from '../components/cards/seasonCard';
import BackyardCard from '../components/cards/backyardCard';
import BirdCard from '../components/cards/birdCard';
import { seasonCards } from '../cards/allSeasonCards';
// import { backyardCards } from '../cards/allBackyardCards';
// import { birdCards } from '../cards/allBirdCards';
import {cardBacks} from '../cards/allCardBacks';

class Decks extends React.Component {
  render(){
    return (
      <div className="decks">
        <BackyardCard card={cardBacks.backyard} />
        <SeasonCard card={seasonCards.find(c => c.name === this.props.game.season)}/>
        <BirdCard card={cardBacks.bird} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {game: state.game}
}

export default connect(mapStateToProps)(Decks);