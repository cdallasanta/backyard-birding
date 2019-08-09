function FlockReducer(state = [], action){
  switch(action.type){
    case "DRAW_BIRD":
      debugger;
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default FlockReducer