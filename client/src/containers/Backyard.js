import React from 'react';
import BackyardCard from '../components/cards/backyardCard';

class Backyard extends React.Component {
  renderBYcards(){
    return this.props.backyard.map((card, i) => {
      return <BackyardCard card={card} key ={i} handleClick={this.handleClick} />
    })
  }

  render(){
    return (
      <div className="hand" id="hand">
        {this.renderBYcards()}
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return {hand: state.player.backyard}
}

export default connect(mapStateToProps)(Backyard);