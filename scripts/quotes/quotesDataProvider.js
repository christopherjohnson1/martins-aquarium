const quoteCollection = [
  {
    text: "When you fish for love, bait with your heart, not your brain.",
    author: "- Mark Twain"
  },
  {
    text: "When something is too hard…..There is always another way.",
    author: "- Charlie (Dory’s Dad)"
  },
  {
    text: "Well, you never really know, but when they know, you know, y’know?",
    author: "- Crush (The Turtle)"
  }
]

export const useQuote = () => {
  // .slice() allows you to return a copy of quoteCollection
  return quoteCollection.slice()
}

export const addQuote = (quote) => {
  quoteCollection.push(quote)
}