
import { retailerHTMLrep } from "./retailer.js"
import { useRetailers } from "./retailersDataProvider.js"
import { useDistributers } from "../distributers/distributersDataProvider.js"
import {useNurseries} from "../nurseries/nurseriesDataProvider.js"
import {useNurseryDistributer} from "../nurseryDistributer/nurseryDistributerDataProvider.js"
import { useFlowers } from "../flowers/flowerDataProvider.js"
import { useNurseryFlowers } from "../nurseryFlowers/nurseryFlowersDataProvider.js"


const contentTarget = document.querySelector(".retailers")


const render = (retailers) =>{
    const distributers = useDistributers()
    const nurseryDistributer = useNurseryDistributer()
    const nurseryFlowers = useNurseryFlowers()
    const nurseries = useNurseries()
    const flowers = useFlowers()
    contentTarget.innerHTML += retailers.map(retailer =>{
       //finding the distributer the retailer used
        const distributerUsed =  distributers.find(dist => dist.id === retailer.distributerId)
       // finding the relationship between distributer and join table
        const nursDistRelationship = nurseryDistributer.filter(nd =>
            nd.distributerId === distributerUsed.id)
       
        const distributerNurseries = nursDistRelationship.map(relationship => {
            return nurseries.find(nursery => nursery.id === relationship.nurseryId)
        })
        
        const foundFlowerRelationship = distributerNurseries.map(nursery =>{
            return nurseryFlowers.filter(relationship => nursery.id === relationship.nurseryId)
           
        }).flat()
    
        const foundFlowers = foundFlowerRelationship.map(rel => {
            return flowers.find(flower => flower.id === rel.flowerId)
        })

        return retailerHTMLrep(retailer, distributerUsed, distributerNurseries, foundFlowers)
    }).join(" ")
}

export const retailerList = () =>{
    const retailers = useRetailers()
    render(retailers)
}