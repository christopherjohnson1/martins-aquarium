const fishCollection = [
  {
      name: "Dory",
      food: "Plankton",
      species: "Blue Tang",
      length: 4,
      location: "Great Barrier Reef",
      image: "./images/blueTang.jpg"
  },
  {
      name: "Nemo",
      food: "Plankton, Algae",
      species: "Clown Fish",
      length: 5,
      location: "Great Barrier Reef",
      image: "./images/clownfish.jpg"
  },
  {
      name: "Nape",
      food: "Shellfish, sea stars, sea urchins, and crabs.",
      species: "Napolean Fish",
      length: 84,
      location: "Great Barrier Reef",
      image: "./images/napolean-fish.jpg"
  }
]

export const useFish = () => {
  //.slice() allows you to return a copy of fishCollection
  return fishCollection.slice()
}

export const addFish = (fish) => {
  fishCollection.push(fish)
}