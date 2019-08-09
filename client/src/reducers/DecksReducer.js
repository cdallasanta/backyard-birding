// deck of nums from 0-44, which will be used to find the IDs of cards still left in the deck
const initBirdDeck = [...Array(45).keys()];
// deck of 0,0,0,0,0,1,1,1,1,1,1,2,2,2,... which are the cards left in the deck, and the nums will point to the IDs of the backyard cards left
const initBackyardDeck = new Array(50);
for(let i = 0; i < 10; i++){
  initBackyardDeck.fill(i, i*5, (i+1)*5)
}

function DecksReducer(state = {
  bird: shuffle(initBirdDeck),
  backyard: shuffle(initBackyardDeck)
}, action){
  switch(action.type){
    // case "START_GAME":
    //   return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default DecksReducer


// this Fisher-Yates shuffle function is taken from
// https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
let shuffle = function (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};