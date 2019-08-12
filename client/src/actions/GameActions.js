export function nextPhase() {
  return {type: "NEXT_PHASE"}
}

export function selectBirdAgain(){
  return {type: "SELECT_BIRD_AGAIN"}
}

export function selectCard(card) {
  return {type: "SELECT_CARD", card}
}

export function toggleDice() {
  return {type: "TOGGLE_DICE"}
}