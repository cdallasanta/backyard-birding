import React from 'react';
import { connect } from 'react-redux';
import BirdCard from '../components/cards/birdCard';
import { selectBird } from '../actions/FlockActions';
import { nextPhase } from '../actions/GameActions';

class Flock extends React.Component {
  renderBirdCards(){
    return this.props.flock.map((bird, i) => {
      return <BirdCard card={bird} key ={i} handleClick={this.handleClick}/>
    })
  }

  handleClick = (bird) => {
    if (this.props.phase === 3) {
      console.log(bird)
      // this.props.selectBird(bird);
      // this.props.nextPhase();
    }
  }

  render(){
    return (
      <div className="top-level-container" id="flock">
        {this.renderBirdCards()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    flock: state.flock,
    phase: state.game.phase
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectBird: bird => dispatch(selectBird(bird)),
    nextPhase: () => dispatch(nextPhase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flock);