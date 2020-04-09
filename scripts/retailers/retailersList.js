
import { retailerHTMLrep } from "./retailer.js"
import { useRetailers } from "./retailersDataProvider.js"
import { useDistributers } from "../distributers/distributersDataProvider.js"

const contentTarget = document.querySelector(".retailers")


const render = (retailers) =>{
    const distributers = useDistributers()
    
    contentTarget.innerHTML += retailers.map(retailer =>{
       
        const distributerUsed =  distributers.find(dist => dist.id === retailer.distributerId)

        return retailerHTMLrep(retailer, distributerUsed)
    }).join(" ")
}

export const retailerList = () =>{
    const retailers = useRetailers()
    render(retailers)
}