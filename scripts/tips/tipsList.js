import {useTip} from "./tipsDataProvider.js"
import {tipsAsHtml} from "./tips.js"

export const tipList = () => {
  // gets reference element on DOM
  const contentElement = document.querySelector(".content--right")

  // collection of tips from tipsDataProvider
  const tips = useTip()

  let tipsHtmlRepresentation = ""
  for(const currentTipObj of tips){
    tipsHtmlRepresentation += tipsAsHtml(currentTipObj)
  }

  // updating HTML of DOM element with tip list HTML
  contentElement.innerHTML += `
    <aside class="tips">
      ${tipsHtmlRepresentation}
    </aside>
  `
}