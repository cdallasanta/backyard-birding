function PlayerReducer(state = {
  playerName: "",
  score: 0,
  hand: []
}, action){
  switch(action.type){
    case "START_GAME":
      return Object.assign(
        {},
        state,
        {playerName: action.payload.playerName}
      )
    default:
      return state;
  }
}

export default PlayerReducer