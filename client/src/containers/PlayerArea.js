import React from 'react';
import Hand from './Hand';
import Score from '../components/Score';

class Flock extends React.Component {
  render(){
    return (
      <div className="playerArea">
        <Hand />
        <Score />
      </div>
    );
  }
}

export default Flock;