import { flowerList } from "./flowers/flowerList.js";
import { getFlowers } from "./flowers/flowerDataProvider.js";
import { getRetailers } from "./retailers/retailersDataProvider.js";
import { retailerList } from "./retailers/retailersList.js";
import { getDistributers } from "./distributers/distributersDataProvider.js";
import { distributerList } from "./distributers/distributersList.js";

getFlowers()
.then(flowerList)
.then(getRetailers)
.then(getDistributers)
.then(retailerList)
.then(distributerList)