import React from 'react';
import { connect } from 'react-redux';
import BirdCard from '../components/cards/birdCard';

class Flock extends React.Component {
  renderBirdCards(){
    return this.props.flock.map((bird, i) => {
      return <BirdCard card={bird} key ={i} />
    })
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
  return {flock: state.flock}
}


export default connect(mapStateToProps)(Flock);