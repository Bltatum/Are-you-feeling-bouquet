import { useDistributers } from "./distributersDataProvider.js"
import { distributerHTMLrep } from "./distributer.js"


const contentTarget = document.querySelector(".distributers")


const render = (distributers) =>{
    contentTarget.innerHTML += distributers.map(distributer =>{
        return distributerHTMLrep(distributer)
    }).join(" ")
}

export const distributerList = () =>{
    const distributers = useDistributers()
    render(distributers)
}