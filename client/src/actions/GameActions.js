export function nextPhase() {
  return {type: "NEXT_PHASE"}
}

export function selectBirdAgain(){
  return {type: "SET_PHASE", phase: 3}
}

export function skipToFlight(){
  return {type: "SET_PHASE", phase: 5}
}

export function skipBirdDraw(){
  return {type: "SET_PHASE", phase: 1}
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

export function gameOver(){
  return (dispatch, getState) => {
    //GAME OVER
    // post game
    const gameState = getState();
    const gameData = {
      player: gameState.player.playerName,
      score: gameState.player.score,
      season: gameState.game.season.name
    }

    fetch('http://localhost:3001/api/games', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(gameData)
    })
    // reset state
    console.log("action stuff")
  }
}