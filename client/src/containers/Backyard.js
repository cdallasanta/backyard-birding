import React from 'react';
import BackyardCard from '../components/cards/backyardCard';
import { connect } from 'react-redux';

class Backyard extends React.Component {
  renderBYcards(){
    return this.props.backyard.map((card, i) => {
      return <BackyardCard card={card} key ={i} handleClick={this.handleClick} />
    })
  }

  render(){
    return (
      <div className="backyard" id="backyard">
        {this.renderBYcards()}
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return {backyard: state.player.backyard}
}

export default connect(mapStateToProps)(Backyard);