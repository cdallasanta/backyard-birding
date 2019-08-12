import React from 'react';
import './cards.css'

const CardBack = props => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleClick() {
    props.drawBird();
    await sleep(150)
    props.drawBird();
  }

  return(
    <img src={props.card.src} alt={props.card.name} className="card bird" onClick={handleClick} />
  );
}

export default CardBack;