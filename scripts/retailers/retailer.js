export const retailerHTMLrep = (retailer, distributer, nursery, flowers) =>{
  return `
<article class=retailer>
  <div><h3>${retailer.name}</h3></div>
    <ul>
      <li>${retailer.city}, ${retailer.state}</li>
      <li>${retailer.address}</li>
      <li>Flowers: ${flowers.map(flower => `${flower.type}`).join(" , ")}</li>
    </ul>
      <p>Distributer: ${distributer.name} 
        <ul>
          <li> Nursery Sources: ${nursery.map(nursery => `${nursery.name}`).join(" , ")}</li>
        </ul>
      </p>
</article>
    `
}