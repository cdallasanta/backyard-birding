function FlockReducer(state = [], action){
  switch(action.type){
    case "DRAW_BIRD":
      // add the bird in the 0 index from the bird deck to the flock
      return [...state, action.newBird]
    default:
      return state;
  }
}

export default FlockReducer