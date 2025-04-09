import { Router } from "express";
import routerCities from "./cities.js";
import routerItineraries from "./itineraries.js";

let routerIndex = Router()
routerIndex.use('/city', routerCities)
routerIndex.use('/itinerary',  routerItineraries)


export default routerIndex