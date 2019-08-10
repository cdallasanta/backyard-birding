import {backyards} from '../images/allImages';

delete backyards["backyardCardBack.png"]

const backyardCards = Object.getOwnPropertyNames(backyards).map((filename, i) => {
  return {
    id: i,
    src: backyards[filename],
    type: filename.replace('.png','')
  };
});

export const initBackyardDeck = new Array(50);
for(let i = 0; i < 10; i++){
  initBackyardDeck.fill(backyardCards[i], i*5, (i+1)*5)
}