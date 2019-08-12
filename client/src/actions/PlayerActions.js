export function toggleHand() {
  return {type:"TOGGLE_HAND"};
}

export function playBYcards(cards) {
  return {type:"PLAY_BACKYARD_CARDS", cards};
} 