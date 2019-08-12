import {seasons} from '../images/allImages';

const phases = ["drawBirds", "drawBYcards", "playBYcards", "chooseBird", "attractBird", "flightRoll"]

const initState = {
  season: { id: 1, name:"spring", src: seasons["spring.png"], points: {
    spring: 4,
    summer: 3,
    fall: 2,
    winter: 1,
    any: 2
  }},
  phase: phases[0],
  selectedBird: null,
  diceVisible: false
}

// TODO, don't want spring as default, this is only here for ease of development
function GameReducer(state = initState, action){
  switch(action.type){
    case "START_GAME":
      return Object.assign({}, state, action.payload);
    case "NEXT_PHASE":
      let newPhase = phases[phases.indexOf(state.phase) + 1];
      return Object.assign({}, state, {phase: newPhase});
    case "SELECT_BIRD":
      return Object.assign({}, state, {selectedBird: action.bird});
    case "TOGGLE_DICE":
      return Object.assign({}, state, {diceVisible: !state.diceVisible});
    case "SELECT_BIRD_AGAIN":
      return Object.assign({}, state, {phase: phases[3]});
    default:
      console.log(state)
      return state;
  }
}

export default GameReducer