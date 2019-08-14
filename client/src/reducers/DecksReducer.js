import {birdCards} from '../cards/allBirdCards'
import {initBackyardDeck} from '../cards/allBackyardCards'


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

// bird: shuffle([...birdCards]).slice(0,birdCards.length/4+1),
const initState = {
	bird: shuffle([...birdCards]).slice(0,2),
  backyard: shuffle([...initBackyardDeck])
}

function DecksReducer(state = initState, action){
  switch(action.type){
    case "DRAW_BIRD":
			// remove the 0 indexed card, it is added to the flock in FlockReducer
      return Object.assign({}, state, {bird: state.bird.slice(1)})
		case "DRAW_BACKYARD_CARD":
				// remove the 0 indexed card, it is added to the hand in PlayerReducer
				return Object.assign({}, state, {backyard: state.backyard.slice(1)})
		case "RESET_GAME":
			return initState;
    default:
      return state;
  }
}

export default DecksReducer

