import React from 'react';
import './cards.css'

const CardBack = props => {
  return(
    <img src={props.card.src} alt={props.card.name} name={props.card.name} className="card bird" onClick={props.handleClick} />
  );
}

export default CardBack;