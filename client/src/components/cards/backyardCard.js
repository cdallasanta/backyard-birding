import React from 'react';
import './cards.css'

const BackyardCard = props => {
  return(
    <img src={props.card.src} alt="backyard" className="card" />
  );
}

export default BackyardCard;