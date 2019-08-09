import {backyards} from '../images/allImages';

delete backyards["backyardCardBack.png"]

export const backyardCards = Object.getOwnPropertyNames(backyards).map((filename, i) => {
  return {
    id: i,
    src: backyards[filename],
    type: filename.replace('.png','')
  };
});