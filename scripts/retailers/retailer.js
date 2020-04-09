export const retailerHTMLrep = (retailer) =>{
    return `
    <article class=retailer>
    <div><h3>${retailer.name}</h3></div>
      <ul>
      <li>${retailer.city}, ${retailer.state}</li>
      <li>${retailer.address}</li>
      </ul>
      
  </article>
    `
}