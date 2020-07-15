// this module creates the list of locations to add to the DOM
import {useLocations} from "./locationsDataProvider.js"
import {locationsAsHtml} from "./locations.js"

export const locationsList = () => {
  // gets reference element on DOM
  const contentElement = document.querySelector(".content--left")

  // collection of locations from locationsDataProvider
  const locations = useLocations()

  let locationsHtmlRepresentations = ""
  for(const currentLocationObj of locations){
    locationsHtmlRepresentations += locationsAsHtml(currentLocationObj)
  }

  // updating HTML of DOM element with location list html
  contentElement.innerHTML += `
    <article class="locations">
      ${locationsHtmlRepresentations}
      </article>
  `
}