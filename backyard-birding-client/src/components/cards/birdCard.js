import React from 'react';
import './cards.css'

const BirdCard = props => {
  return(
    <img src={props.card.src} alt="bird" className="card" />
  );
}

export default BirdCard;