export const retailerHTMLrep = (retailer, distributer, nursery) =>{
    return `
    <article class=retailer>
    <div><h3>${retailer.name}</h3></div>
      <ul>
      <li>${retailer.city}, ${retailer.state}</li>
      <li>${retailer.address}</li>
      <li>Distributer: ${distributer.name}</li>
      <li>Nursery Sources: ${nursery.map(nursery => `${nursery.name}`).join(" , ")}</li>
      </ul>
      
  </article>
    `
}