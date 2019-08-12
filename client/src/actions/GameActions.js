export function nextPhase() {
  return {type:"NEXT_PHASE"}
}

export function selectCard(card) {
  return {type:"SELECT_CARD", card}
}