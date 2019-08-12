import React from 'react';
import './cards.css'

const BirdCard = props => {
  console.log(props.card.src)
  return(
    <img src={props.card.src} alt={props.card.name} className="card bird" />
  );
}

export default BirdCard;