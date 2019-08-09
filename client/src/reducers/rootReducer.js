import GameReducer from './GameReducer';
import FlockReducer from './FlockReducer';
import DecksReducer from './DecksReducer';
import PlayerReducer from './PlayerReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  game: GameReducer,
  flock: FlockReducer,
  decks: DecksReducer,
  player: PlayerReducer
});

export default rootReducer;