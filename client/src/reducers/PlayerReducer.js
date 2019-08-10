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
    case "DRAW_BACKYARD_CARD":
      // add the BY card in the 0 index from the deck to the hand
      const newSortedHand = [...state.hand, action.newBYcard].sort((a,b) => a.id-b.id)

      return Object.assign(
        {},
        state,
        {hand: newSortedHand}
      )
    default:
      return state;
  }
}

export default PlayerReducer