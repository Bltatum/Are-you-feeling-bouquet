import { useNurseries } from "./nurseriesDataProvider.js"
import { nurseryHTMLrep } from "./nurseries.js"

const contentTarget = document.querySelector(".nurseries")


const render = (nurseries) =>{
    contentTarget.innerHTML += nurseries.map(nursery =>{
        return nurseryHTMLrep(nursery)
    }).join(" ")
}

export const nurseriesList = () =>{
    const nurseries = useNurseries()
    render (nurseries)
}
