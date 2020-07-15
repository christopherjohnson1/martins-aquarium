export const locationsAsHtml = (locationObj) => {
  return `
  <section class="location card">
  <div>
      <img class="location__image image--card" src="${locationObj.image}" />
  </div>
  <div class="location__name">${locationObj.name}</div>
  <div class="location__url"><a href="${locationObj.url}">Great Barrier Reef</a></div>
  <div class="location__description">${locationObj.description}</div>
</section>
  `
}