
import { retailerHTMLrep } from "./retailer.js"
import { useRetailers } from "./retailersDataProvider.js"

const contentTarget = document.querySelector(".retailers")


const render = (retailers) =>{
    contentTarget.innerHTML += retailers.map(retailer =>{
        return retailerHTMLrep(retailer)
    }).join(" ")
}

export const retailerList = () =>{
    const retailers = useRetailers()
    render(retailers)
}