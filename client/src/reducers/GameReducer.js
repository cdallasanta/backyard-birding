// this isn't used at the moment, but at least is usefull to me
// const phases = ["drawbirds", "drawBYcards", "playBYcards", "chooseBird", "attractBird", "flightRoll"]


// TODO, don't want spring as default, this is only here for ease of development
function GameReducer(state = {
  season: "spring",
  phase: 0,
  selectedBird: null
}, action){
  switch(action.type){
    case "START_GAME":
      return Object.assign({}, state, action.payload)
    case "NEXT_PHASE":
      let newPhase = state.phase + 1 > 6 ? 0 : state.phase + 1;
      return Object.assign({}, state, {phase: newPhase})
    case "SELECT_BIRD":
      return Object.assign({}, state, {selectedBird: action.bird})
    default:
      return state;
  }
}

export default GameReducer