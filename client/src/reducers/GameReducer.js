
// TODO, don't want spring as default, this is only here for ease of development
function GameReducer(state = {
  season: "spring"
}, action){
  switch(action.type){
    case "START_GAME":
      console.log(Object.assign({}, state, action.payload))
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default GameReducer