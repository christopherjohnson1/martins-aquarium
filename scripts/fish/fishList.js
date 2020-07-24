// this module creates the list of fish to add to the DOM
import {useFish} from "./fishDataProvider.js"
import {fishAsHtml} from "./fish.js"

export const fishList = () => {
  // gets reference to elemnt on DOM
  const contentElement = document.querySelector(".content--left")

  // collection of fish from fishDataProvider
  const fishes = useFish()

  // updating HTML of DOM element with Fish List HTML
  contentElement.innerHTML += `
    <article class="fishes">
      ${fishes.map(currentFishObj => fishAsHtml(currentFishObj)).join('')}
      </article>
  `
}
