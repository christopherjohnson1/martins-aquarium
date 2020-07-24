// this module creates the list of locations to add to the DOM
import {useLocations} from "./locationsDataProvider.js"
import {locationsAsHtml} from "./locations.js"

export const locationsList = () => {
  // gets reference element on DOM
  const contentElement = document.querySelector(".content--left")

  // collection of locations from locationsDataProvider
  const locations = useLocations()

  // updating HTML of DOM element with location list html
  contentElement.innerHTML += `
    <article class="locations">
      ${locations.map(currentLocationObj => locationsAsHtml(currentLocationObj)).join('')}
      </article>
  `
}