export function drawBYcard(numToDraw = 1) {
  return (dispatch, getState) => {
    for(let i=0; i < numToDraw; i++){
      const wholeState = getState();
      dispatch({
        type: "DRAW_BACKYARD_CARD",
        newBYcard: wholeState.decks.backyard[0]
      });
    }
  };
}