import {useTip} from "./tipsDataProvider.js"
import {tipsAsHtml} from "./tips.js"

export const tipList = () => {
  // gets reference element on DOM
  const contentElement = document.querySelector(".content--right")

  // collection of tips from tipsDataProvider
  const tips = useTip()

  // updating HTML of DOM element with tip list HTML
  contentElement.innerHTML += `
    <aside class="tips">
      ${tips.map(currentTipObj => tipsAsHtml(currentTipObj)).join('')}
    </aside>
  `
}