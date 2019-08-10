export function drawBYcard() {
  return (dispatch, getState) => {
    const wholeState = getState();
    dispatch({
      type: "DRAW_BACKYARD_CARD",
      newBYcard: wholeState.decks.backyard[0]
    });
  };
}