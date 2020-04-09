export const distributerHTMLrep = (distributers) =>{
    return `
    <article class=distributer>
    <div><h3>${distributers.name}</h3></div>
      <ul>
      <li>${distributers.city}, ${distributers.state}</li>
      <li>${distributers.address}</li>
      </ul>
      
  </article>
    `
}