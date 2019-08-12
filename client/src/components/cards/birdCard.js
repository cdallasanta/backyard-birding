import React from 'react';
import './cards.css'

class BirdCard extends React.Component {
  state = {
    zoomed: false
  }

  zoomCard = () => {
    this.setState({zoomed: !this.state.zoomed})
  }

  render(){
    return(
      <img src={this.props.card.src} alt={this.props.card.name} className={`card bird${this.state.zoomed ? " zoomed" : ""}`} onDoubleClick={this.zoomCard} />
    );
  }
}

export default BirdCard;