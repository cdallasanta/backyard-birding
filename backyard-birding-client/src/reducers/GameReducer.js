function GameReducer(state = [], action){
  switch(action.type){
    case "START_GAME":
      console.log(action.payload);
      return action.payload
    default:
      return state;
  }
}

export default GameReducer