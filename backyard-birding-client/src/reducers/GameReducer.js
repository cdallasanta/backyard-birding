function GameReducer(state = {}, action){
  switch(action.type){
    case "START_GAME":
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default GameReducer