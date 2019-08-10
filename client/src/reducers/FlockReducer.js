function FlockReducer(state = [], action){
  switch(action.type){
    case "DRAW_BIRD":
      const newBird = action.wholeState.decks.bird[0]
      return [...state, newBird]
    default:
      return state;
  }
}

export default FlockReducer