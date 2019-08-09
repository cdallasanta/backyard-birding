
// TODO, don't want spring as default, this is only here for ease of development
function GameReducer(state = {season:"spring"}, action){
  switch(action.type){
    case "START_GAME":
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default GameReducer