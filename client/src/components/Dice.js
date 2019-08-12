import React from 'react';
import ReactDice from 'react-dice-complete';
import { connect } from 'react-redux';
import 'react-dice-complete/dist/react-dice-complete.css';
import { nextPhase, selectBirdAgain } from '../actions/GameActions';
import { scoreBird } from '../actions/FlockActions';

// this is based off of react-dice by Adam Taylor, found here:
// https://github.com/AdamTyler/react-dice-complete/blob/master/src/Die.js

class Dice extends React.Component {
  state = {
    loaded: false
  }

  //this gets around the function running once it renders
  rollDone = result => {
    if (!this.state.loaded){
      this.setState({loaded: true})
    } else {
      this.checkForSuccess(result)
    }
  }

  checkForSuccess = result => {
    const BYcards = this.gatherBYcards();
    let bonus = this.setBonus(BYcards);

    if(result === 6) {
      //add fly-to-score animation, and when done, do the following
      this.props.scoreBird(this.props.selectedBird, BYcards)
      this.props.selectBirdAgain();
    } else if(result >= 4-bonus){
      //add fly-to-score animation, and when done, do the following
      this.props.scoreBird(this.props.selectedBird, BYcards)
      this.props.nextPhase();
    } else {
      this.props.nextPhase();
    }
  }

  gatherBYcards = () => {
        // checks the backyard for the first card that matches the bird's need
    // if there are undefined values, pass through again looking for a second copy of the first need
    // the filter removes 'undefined' from the array when no backyard card matches the need
    const BYcopy = [...this.props.backyard]
    const BYcards = []
    
    let passThrough = () => {
      this.props.selectedBird.habitat.forEach(need =>{
        let matchingCard = BYcopy.find(by => by.type === need)
        if(!!matchingCard){
          BYcards.push(BYcopy.splice(BYcopy.indexOf(matchingCard), 1)[0])
        }
      })
    }

    passThrough();
    if (BYcards.length < 2) {passThrough()}

    return BYcards;
  }

  setBonus = BYcards => {
    if (BYcards.length === 1) {
      return 0;
    } else if (BYcards[0].type === BYcards[1].type) {
      return 1;
    } else {
      return 2;
    }
  }

  render() {
    return(
      <div id="dice">
        <ReactDice
          numDice={1}
          rollDone={this.rollDone}
          ref={dice => this.reactDice = dice}
          outline={true}
          faceColor="#FFF"
          dotColor="#000"
        /> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBird: state.game.selectedBird,
    backyard: state.player.backyard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextPhase: () => dispatch(nextPhase()),
    selectBirdAgain: () => dispatch(selectBirdAgain()),
    scoreBird: (bird, BYcards) => dispatch(scoreBird(bird, BYcards))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice);