import React from 'react';
import { connect } from 'react-redux';
import BirdCard from '../components/cards/birdCard';
import { selectBird } from '../actions/FlockActions';
import { nextPhase } from '../actions/GameActions';

class Flock extends React.Component {
  renderBirdCards(){
    return this.props.flock.map((bird, i) => {
      return <BirdCard card={bird} key ={i} handleClick={this.handleClick} selected={this.props.selectedBird === bird} />
    })
  }

  handleClick = (e, bird) => {
    if (this.props.phase === "chooseBird") {
      this.props.selectBird(bird);
      this.props.nextPhase();
    } else if (this.props.phase === "attractBird") {
      this.props.selectBird(bird);
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
    phase: state.game.phase,
    selectedBird: state.game.selectedBird
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectBird: bird => dispatch(selectBird(bird)),
    nextPhase: () => dispatch(nextPhase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flock);