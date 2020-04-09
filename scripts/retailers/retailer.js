export const retailerHTMLrep = (retailer, distributer) =>{
    return `
    <article class=retailer>
    <div><h3>${retailer.name}</h3></div>
      <ul>
      <li>${retailer.city}, ${retailer.state}</li>
      <li>${retailer.address}</li>
      <li>Distributer: ${distributer.name}</li>
      </ul>
      
  </article>
    `
}