import React from 'react';
import { connect } from 'react-redux';
import BackyardCard from '../components/cards/backyardCard';

class Hand extends React.Component {
  renderBYcards(){
    return this.props.hand.map((card, i) => {
      return <BackyardCard card={card} key ={i} />
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

export default connect(mapStateToProps)(Hand);