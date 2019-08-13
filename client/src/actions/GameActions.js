export function nextPhase() {
  return {type: "NEXT_PHASE"}
}

export function selectBirdAgain(){
  return {type: "SET_PHASE", phase: 3}
}

export function skipToFlight(){
  return {type: "SET_PHASE", phase: 5}
}

export function selectCard(card) {
  return {type: "SELECT_CARD", card}
}

export function toggleDice() {
  return {type: "TOGGLE_DICE"}
}

export function showDice() {
  return {type: "SHOW_DICE"}
}