import React from 'react';
import { connect } from 'react-redux';
import BackyardCard from '../components/cards/backyardCard';
import {playBYcards} from '../actions/PlayerActions'

class Hand extends React.Component {
  state = {
    selectedCards: []
  }

  handleClick = (e, card) => {
    if (this.state.selectedCards.length < 2){
      this.setState({
        selectedCards: [...this.state.selectedCards, card]
      })
    } else {
      playBYcards(this.state.selectedCards);
      this.setState({
        selectedCards: []
      })
    }
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
    playBYcards: selectedCards => dispatch(playBYcards(selectedCards))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hand);