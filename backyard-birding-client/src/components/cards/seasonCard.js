import React from 'react';
import './cards.css'

const SeasonCard = props => {
  return(
    <img src={props.card.src} alt={props.card.name} className="card seasonCard" />
  );
}

export default SeasonCard;