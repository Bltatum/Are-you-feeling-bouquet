
import { retailerHTMLrep } from "./retailer.js"
import { useRetailers } from "./retailersDataProvider.js"
import { useDistributers } from "../distributers/distributersDataProvider.js"
import {useNurseries} from "../nurseries/nurseriesDataProvider.js"
import {useNurseryDistributer} from "../nurseryDistributer/nurseryDistributerDataProvider.js"


const contentTarget = document.querySelector(".retailers")


const render = (retailers) =>{
    const distributers = useDistributers()
    const nurseryDistributer = useNurseryDistributer()
    const nurseries = useNurseries()
    contentTarget.innerHTML += retailers.map(retailer =>{
       
        const distributerUsed =  distributers.find(dist => dist.id === retailer.distributerId)
        const nursDistRelationship = nurseryDistributer.filter(nd =>
            nd.distributerId === distributers.id)
        const distributerSuplliers = nursDistRelationship.map(relationship => {
            return nurseries.find(nursery => nursery.id === relationship.distributerId)
        })

        return retailerHTMLrep(retailer, distributerUsed, distributerSuplliers)
    }).join(" ")
}

export const retailerList = () =>{
    const retailers = useRetailers()
    render(retailers)
}