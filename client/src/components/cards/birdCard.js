import React from 'react';
import './cards.css'

class BirdCard extends React.Component {
  state = {
    zoomed: false
  }

  zoomCard = e => {
    e.preventDefault();
    this.setState({zoomed: !this.state.zoomed})
  }

  render(){
    return(
      <img src={this.props.card.src} alt={this.props.card.name} className={`card bird${this.state.zoomed ? " zoomed" : ""}${this.props.selected ? " selected" : ""}`} onContextMenu={this.zoomCard} onClick={e => this.props.handleClick(e, this.props.card)} />
    );
  }
}

export default BirdCard;