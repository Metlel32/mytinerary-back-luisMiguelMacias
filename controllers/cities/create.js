
import City from "../../models/City.js";

let create = async (req, res, next) => {
    try {
        let cityInfo = req.body

        if (typeof cityInfo !== "object" || Array.isArray(cityInfo) || cityInfo === null || Object.keys(cityInfo).length === 0) {
            let error = new Error("bad request")
            error.status = 400

            return next(error)
        }


        let createCity = await City.create(cityInfo)
        return res.status(201).json({
            response: createCity
        })
    } catch (error) {

        next(error)
    }
}


let createCities = async (req, res, next) => {

    try {
        let citiesInfo = req.body
        if (!Array.isArray(citiesInfo) || citiesInfo.length === 0) {

            let error = new Error("bad request")
            error.status = 400
            return next(error)
        }
        let createCities = await City.insertMany(citiesInfo)
        return res.status(201).json({
            response: createCities
        })
    } catch (error) {
        next(error)
    }

}
export { create, createCities}