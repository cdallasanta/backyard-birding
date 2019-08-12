import React from 'react';
import { connect } from 'react-redux';
import BackyardCard from '../components/cards/backyardCard';
import { drawBYcard } from '../actions/HandActions';

class Hand extends React.Component {
  renderBYcards(){
    return this.props.hand.map((card, i) => {
      return <BackyardCard card={card} key ={i} />
    })
  }

  handleClick = e => {
    this.props.drawBYcard();
  }

  render(){
    return (
      <div className="hand" id="hand">
        {this.renderBYcards()}
        <input type="button" onClick={this.handleClick} value="Draw Card" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {hand: state.player.hand}
}

const mapDispatchToProps = dispatch => {
  return {drawBYcard: num => dispatch(drawBYcard(num))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hand);