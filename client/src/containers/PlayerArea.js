import React from 'react';
import Hand from './Hand';
import Score from '../components/Score';
import { connect } from 'react-redux';

class PlayerArea extends React.Component {
  render(){
    return (
      <div className="playerArea" id="playerArea">
        {this.props.handVisible ? <Hand /> : null }
        <button onClick={() => this.props.toggleHand()}>Toggle Hand</button>
        <Score />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    handVisible: state.player.handVisible
  }
}

const mapDisptachToProps = dispatch => {
  return {
    toggleHand: () => dispatch({type:'TOGGLE_HAND'})
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(PlayerArea);