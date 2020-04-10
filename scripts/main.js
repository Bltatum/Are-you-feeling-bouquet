import { flowerList } from "./flowers/flowerList.js";
import { getFlowers } from "./flowers/flowerDataProvider.js";
import { getRetailers } from "./retailers/retailersDataProvider.js";
import { retailerList } from "./retailers/retailersList.js";
import { getDistributers } from "./distributers/distributersDataProvider.js";
import { distributerList } from "./distributers/distributersList.js";
import {nurseriesList } from "./nurseries/nurseriesList.js"
import { getNurseries } from "./nurseries/nurseriesDataProvider.js";
import { getNurseryDistributer } from "./nurseryDistributer/nurseryDistributerDataProvider.js";
import { getNurseryFlowers } from "./nurseryFlowers/nurseryFlowersDataProvider.js";

getFlowers()
.then(flowerList)
.then(getRetailers)
.then(getDistributers)
.then(getNurseries)
.then(getNurseryDistributer)
.then(getNurseryFlowers)
.then(retailerList)
.then(distributerList)
.then(nurseriesList)