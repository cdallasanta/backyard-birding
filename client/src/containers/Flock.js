import React from 'react';
import { connect } from 'react-redux';
import BirdCard from '../components/cards/birdCard';
import {drawBird} from '../actions/FlockActions';

class Flock extends React.Component {
  renderBirdCards(){
    return this.props.flock.map((bird, i) => {
      return <BirdCard card={bird} key ={i} />
    })
  }

  handleClick = e => {
    this.props.drawBird();
  }

  render(){
    return (
      <div className="flock" id="flock">
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
  return {drawBird: () => dispatch(drawBird())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Flock);