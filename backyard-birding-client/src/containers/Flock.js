import React from 'react';
import { birdCards } from '../cards/allBirdCards';
import BirdCard from '../components/cards/birdCard';

class Flock extends React.Component {
  render(){
    return (
      <BirdCard card={birdCards[0]} />
    );
  }
}

export default Flock;