import React from 'react';
import { connect } from 'react-redux';
import { birdCards } from '../cards/allBirdCards';
import BirdCard from '../components/cards/birdCard';

class Flock extends React.Component {
  renderBirdCards(){
    return this.props.flock.map((birdId, i) => {
      return <BirdCard card={birdCards[birdId]} key ={i} />
    })
  }

  handleClick = e => {
    this.props.drawBird();
  }

  render(){
    return (
      <div className="flock">
        {this.renderBirdCards()}
        <input type="button" onClick={this.handleClick} value="Draw Bird" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {flock: state.flock}
}

const mapDispatchToProps = dispatch => {
  return {drawBird: () => dispatch({type:"DRAW_BIRD"})}
}

export default connect(mapStateToProps, mapDispatchToProps)(Flock);