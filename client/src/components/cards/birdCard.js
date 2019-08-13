import React from 'react';
import './cards.css'
import { removeBird } from '../../actions/FlockActions';
import { connect } from 'react-redux';

class BirdCard extends React.Component {
  state = {
    zoomed: false
  }

  zoomCard = e => {
    e.preventDefault();
    this.setState({zoomed: !this.state.zoomed})
  }

  handleAnimationEnd = e => {
    if (e.target.classList.contains("flyToScore") ||
      e.target.classList.contains("flyAway")){
      this.props.removeBird();
    }
  }

  render(){
    return(
      <img
        src={this.props.card.src}
        alt={this.props.card.name}
        className={`card bird${this.state.zoomed ? " zoomed" : ""}${this.props.selected ? " selected" : ""}`}
        onContextMenu={this.zoomCard}
        onClick={e => this.props.handleClick(e, this.props.card)} 
        onAnimationEnc={this.handleAnimationEnd}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeBird: bird => dispatch(removeBird(bird))
  }
}

export default connect(null, mapDispatchToProps)(BirdCard);