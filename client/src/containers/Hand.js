import React from 'react';
import { connect } from 'react-redux';
import BackyardCard from '../components/cards/backyardCard';
import { playBYcards } from '../actions/PlayerActions'
import { toggleHand } from '../actions/PlayerActions'
import { nextPhase } from '../actions/GameActions'

class Hand extends React.Component {
  state = {
    selectedCards: []
  }

  handleClick = (e, card) => {
    // TODO select and unselect
    this.setState({
      selectedCards: [...this.state.selectedCards, card]
    }, () => {
      if (this.state.selectedCards.length === 2){
        this.props.playBYcards(this.state.selectedCards);
        this.setState({
          selectedCards: []
        })
        this.props.toggleHand();
        this.props.nextPhase();
      }
    })
  }

  renderBYcards(){
    return this.props.hand.map((card, i) => {
      return <BackyardCard card={card} key ={i} handleClick={this.handleClick} />
    })
  }

  render(){
    return (
      <div className="hand" id="hand">
        {this.renderBYcards()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {hand: state.player.hand}
}

const mapDispatchToProps = dispatch => {
  return {
    playBYcards: cards => dispatch(playBYcards(cards)),
    toggleHand: () => dispatch(toggleHand()),
    nextPhase: () => dispatch(nextPhase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hand);