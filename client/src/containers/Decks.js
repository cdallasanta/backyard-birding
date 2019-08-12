import React from 'react';
import { connect } from 'react-redux';
import SeasonCard from '../components/cards/seasonCard';
import CardBack from '../components/cards/CardBack'
import { seasonCards } from '../cards/allSeasonCards';
import { cardBacks } from '../cards/allCardBacks';
import { drawBird } from '../actions/FlockActions';
import { drawBYcard } from '../actions/HandActions';
import { nextPhase } from '../actions/GameActions';
import { toggleHand } from '../actions/PlayerActions';
import Instructions from '../components/Instructions';
import Dice from '../components/Dice';

class Decks extends React.Component {
  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleClick = async (e) => {
    if (this.props.game.phase === "drawBirds" && e.target.getAttribute('name') === "birdDeck"){
      this.props.drawBird();
      await this.sleep(150)
      this.props.drawBird();
      this.props.nextPhase();
    } else if (this.props.game.phase === "drawBYcards" && e.target.getAttribute('name') === "backyardDeck") {
      this.props.toggleHand();
      this.props.drawBYcard();
      this.props.drawBYcard();
      this.props.nextPhase();
    }
  }

  rollDone = () => {

  }

  render(){
    return (
      <div className="top-level-container" id="decks">
        <Instructions phase={this.props.game.phase}/>
        <CardBack card={cardBacks.bird} handleClick={this.handleClick} />
        <SeasonCard card={seasonCards.find(c => c.id === this.props.game.season.id)}/>
        <CardBack card={cardBacks.backyard} handleClick={this.handleClick}  />
        {this.props.game.diceVisible ? <Dice rollDone={this.rollDone} /> : null}
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
    drawBYcard: () => dispatch(drawBYcard()),
    toggleHand: () => dispatch(toggleHand())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);