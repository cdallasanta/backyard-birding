import {backyards} from '../images/allImages';

delete backyards["backyardCardBack.png"]

const backyardCards = Object.getOwnPropertyNames(backyards).map((filename, i) => {
  return {
    src: backyards[filename],
    type: filename.replace('.png','')
  };
});

export let initBackyardDeck;

// fill the array with 5 copies of each card
initBackyardDeck = new Array(50);
for(let i = 0; i < 10; i++){
  initBackyardDeck.fill(backyardCards[i], i*5, (i+1)*5)
}

// assign a unique id to each card
initBackyardDeck.forEach(function(card, index) {
  this[index] = Object.assign({}, card, {id: index});
}, initBackyardDeck);