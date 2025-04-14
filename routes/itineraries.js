import { Router } from "express";
import { create, createItineraries } from "../controllers/itineraries/create.js";
import { allItineraries, itineraryByName, itineraryById } from "../controllers/itineraries/read.js";
import { update } from "../controllers/itineraries/update.js";
import { deleteItinerary } from "../controllers/itineraries/delete.js";







const routerItineraries = Router()

routerItineraries.get('/allItineraries', allItineraries)
routerItineraries.get('/id/:idParams', itineraryById)
routerItineraries.get('/name/:nameParams', itineraryByName)
routerItineraries.post('/create', create)
routerItineraries.post('/createItineraries', createItineraries)
routerItineraries.put('/update', update)
routerItineraries.delete('/delete', deleteItinerary)

export default routerItineraries
