import {fishList} from "./fish/fishList.js"
import {quoteList} from "./quotes/quotesList.js"
import {locationsList} from "./locations/locationsList.js"
import {tipList} from "./tips/tipsList.js"

const pageBuilder = () => {
  fishList()
  quoteList()
  locationsList()
  tipList()
}

pageBuilder()