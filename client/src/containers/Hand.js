import React from 'react';
import BackyardCard from '../components/cards/backyardCard';
import { backyardCards } from '../cards/allBackyardCards'

class Hand extends React.Component {
  render(){
    return (
      <div className="decks">
        <BackyardCard card={backyardCards[1]} />
        <BackyardCard card={backyardCards[2]} />
        <BackyardCard card={backyardCards[3]} />
      </div>
    );
  }
}

export default Hand;