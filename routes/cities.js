import { Router } from "express";
import { allCities, cityByID } from "../controllers/cities/read.js";
import { create, createCities } from "../controllers/cities/create.js";
import { deleteCity } from "../controllers/cities/delete.js";







const routerCities = Router()
routerCities.get('/allCities', allCities)
routerCities.get('/id/:idParams', cityByID)
routerCities.post('/create', create)
routerCities.post('/createCities', createCities)
routerCities.delete('/delete', deleteCity)


export default routerCities


