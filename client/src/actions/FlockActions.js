export function drawBird() {
  return (dispatch, getState) => {
    const wholeState = getState();
    dispatch({
      type: "DRAW_BIRD",
      newBird: wholeState.decks.bird[0]
    });
  };
}

export function scoreBird(bird, BYcards) {
  return {
    type: "SCORE_BIRD",
    payload: {
      bird,
      BYcards
    }
  }
}

export function selectBird(bird) {
  return {
    type: "SELECT_BIRD",
    bird
  }
}