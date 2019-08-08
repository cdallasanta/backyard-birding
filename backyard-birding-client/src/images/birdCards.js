function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const birds = importAll(require.context('./birdCards', false, /\.png$/));
const seasons = importAll(require.context('./seasonCards', false, /\.png$/));
// const backyards = importAll(require.context('./birdCards', false, /\.png$/));

export const seasons = [
  { id: 1, name:"spring", src: seasons["spring.png"], points: {
    spring: 4,
    summer: 3,
    fall: 2,
    winter: 1,
    any: 2
  }}
  { id: 2, name:"summer", src: seasons["summer.png"], points: {
    spring: 1,
    summer: 4,
    fall: 3,
    winter: 2,
    any: 2
  }}
  { id: 3, name:"fall", src: seasons["fall.png"], points: {
    spring: 2,
    summer: 1,
    fall: 4,
    winter: 3,
    any: 2
  }}
  { id: 4, name:"winter", src: seasons["winter.png"], points: {
    spring: 3,
    summer: 2,
    fall: 1,
    winter: 4,
    any: 2
  }}
]

export const birdCards = [
  { id: 1, src: birds["americanCoot.png"], name: 'American Coot', flightNums: [1, 2], season: "winter", habitat: ["wetland", "wildGrass"] },
  { id: 2, src: birds["americanCrow.png"], name: 'American Crow', flightNums: [3, 4], season: "any", habitat: ["nuts", "lawn"] },
  { id: 3, src: birds["americanGoldfinch.png"], name: 'American Goldfinch', flightNums: [5, 6], season: "spring", habitat: ["seeds", "trees"] },
  { id: 4, src: birds["americanRobin.png"], name: 'American Robin', flightNums: [1, 2], season: "spring", habitat: ["insects", "lawn"] },
  { id: 5, src: birds["americanWigeon.png"], name: 'American Wigeon', flightNums: [3,4], season: "fall", habitat: ["runningWater", "wildGrass"] }
];