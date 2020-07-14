// this module creates the list of fish to add to the DOM
import {useQuote} from "./quotesDataProvider.js"
import {quotesAsHtml} from "./quotes.js"

export const quoteList = () => {
  // gets reference to element on DOM
  const contentElement = document.querySelector(".content--left")

  // collection of quotes from quoteDataProvider
  const quotes = useQuote()

  let quoteHtmlRepresentations = ""
  for(const currentQuoteObj of quotes){
    quoteHtmlRepresentations += quotesAsHtml(currentQuoteObj)
  }

  // updating HTML of DOM element with quote list html
  contentElement.innerHTML += `
      <article class="quotes">
        ${quoteHtmlRepresentations}
      </article>
  `
}