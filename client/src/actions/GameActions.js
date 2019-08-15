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

export function getGames() {
  return dispatch => {
    dispatch({type:"LOADING_SCORES"})
    fetch('http://localhost:3001/api/high_scores')
      .then(resp => resp.json())
      .then(scores => dispatch({type:"SET_SCORES", payload: scores}))
  }
}

export function gameOver(){
  return getState => {
    // post the game
    const gameState = getState();
    const gameData = {
      player: gameState.player.playerName,
      score: gameState.player.score,
      season: gameState.game.season.name
    }

    return fetch('http://localhost:3001/api/games', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(gameData)
    })
  }
}