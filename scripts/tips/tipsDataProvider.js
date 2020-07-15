const tipCollection = [
  {
    tip: "Maintain proper pH levels."
  },
  {
    tip: "Provide enough space."
  },
  {
    tip: "Clean the tank regularly."
  }
]

export const useTip = () => {
  return tipCollection.slice()
}

export const addTip = (tip) => {
  tipCollection.push(tip)
}