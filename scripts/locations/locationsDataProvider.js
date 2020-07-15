const locationCollection = [
  {
    name: "Great Barrier Reef",
    image: "./images/reef.jpg",
    url: "https://greatbarrierreef.org/",
    description: "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches."
  },
  {
    name: "Bonaire",
    image: "./images/bonaire-diving-jennifer-penner.jpg",
    url: "https://www.tourismbonaire.com/",
    description: "From the depths of our pristine waters to the height of our tallest peak, Brandaris, you will feel Bonaire’s magic wash over you from the moment you arrive and throughout the days as you become attuned to Bonaire’s unhurried pace."
  },
  {
    name: "Great Belize Blue Hole",
    image: "./images/blue-hole.jpg",
    url: "https://belize.com/belize-blue-hole/",
    description: "The Great Blue Hole is a world-class destination for recreational scuba divers attracted by the opportunity to dive in crystal-clear waters and see myriad species of marine life including tropical fish and spectacular coral formations."
  }
]

export const useLocations = () => {
  //.slice() allows you to return a copy of locationsCollection
  return locationCollection.slice()
}

export const addLocation = (location) => {
  locationCollection.push(location)
}