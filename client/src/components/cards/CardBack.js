import React from 'react';
import './cards.css'

const CardBack = props => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleClick(e) {
    if ((props.phase === 0 && e.target.getAttribute('name') === "birdDeck") ||
      (props.phase === 1 && e.target.getAttribute('name') === "backyardDeck")
    ){
      props.whenClicked();
      await sleep(150)
      props.whenClicked();
      props.nextPhase();
    }
  }

  return(
    <img src={props.card.src} alt={props.card.name} name={props.card.name} className="card bird" onClick={handleClick} />
  );
}

export default CardBack;