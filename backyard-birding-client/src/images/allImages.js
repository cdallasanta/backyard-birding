function importAll(r) {
  let images = {};
  r.keys().map(item => images[item.replace('./', '')] = r(item));
  return images;
}

export const birds = importAll(require.context('./birdCards', false, /\.png$/));
export const seasons = importAll(require.context('./seasonCards', false, /\.png$/));
// const backyards = importAll(require.context('./birdCards', false, /\.png$/));