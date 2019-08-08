function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./birdCards', false, /\.png$/));

const birdCards = [
  { id: 1, src: images["americanCoot.png"], name: 'American Coot', flightNums: [1, 2], season: "winter", habitat: ["wetland", "wildGrass"] },
  { id: 2, src: images["americanCrow.png"], name: 'American Crow', flightNums: [3, 4], season: "any", habitat: ["nuts", "lawn"] },
  { id: 3, src: images["americanGoldfinch.png"], name: 'American Goldfinch', flightNums: [5, 6], season: "spring", habitat: ["seeds", "trees"] },
  { id: 4, src: images["americanRobin.png"], name: 'American Robin', flightNums: [1, 2], season: "spring", habitat: ["insects", "lawn"] },
  { id: 5, src: images["americanWigeon.png"], name: 'American Wigeon', flightNums: [3,4], season: "fall", habitat: ["runningWater", "wildGrass"] }
];

export default birdCards;