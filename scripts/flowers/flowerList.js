import { flowersHTMLrep } from "./flower.js"
import { useFlowers } from "./flowerDataProvider.js"


const contentTarget = document.querySelector(".flowers")


const render = (flowers) =>{
    contentTarget.innerHTML += flowers.map(flower =>{
        return flowersHTMLrep(flower)
    }).join(" ")
}

export const flowerList = () =>{
    const flowers = useFlowers()
    render(flowers)
}
