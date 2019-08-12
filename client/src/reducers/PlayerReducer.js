const initState = {
  playerName: "",
  score: 0,
  hand: [],
  backyard: [],
  handVisible: false
}

function PlayerReducer(state = initState, action){
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

    case "TOGGLE_HAND":
      return Object.assign({}, state, {handVisible: !state.handVisible})

    case "PLAY_BACKYARD_CARDS":
      debugger;
      // hand with the selected cards filtered out
      const newHand = state.hand.filter(c => c.id !== action.cards[0].id && c.id !== action.cards[1].id)

      return Object.assign({}, state, {
        backyard: [...state.backyard, ...action.cards],
        hand: newHand
      })
      
    default:
      return state;
  }
}

export default PlayerReducer