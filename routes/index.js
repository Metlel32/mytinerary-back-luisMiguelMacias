import { Router } from "express";
import routerCities from "./cities.js";

let routerIndex = Router()
routerIndex.use('/city', routerCities)


export default routerIndex