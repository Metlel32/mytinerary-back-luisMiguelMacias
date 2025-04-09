import Itinerary from "../../models/Itinerary.js"

let create = async (req, res, next) => {
    try {
        let itineraryInfo = req.body

        if (typeof itineraryInfo !== "object" || Array.isArray(itineraryInfo) || itineraryInfo === null || Object.keys(itineraryInfo).length === 0) {
            let error = new Error("bad request")
            error.status = 400

            return next(error)
        }


        let createItinerary = await Itinerary.create(itineraryInfo)
        return res.status(201).json({
            response: createItinerary
        })
    } catch (error) {

        next(error)
    }
}


let createItineraries = async (req, res, next) => {

    try {
        let itinerariesInfo = req.body
        if (!Array.isArray(itinerariesInfo) || itinerariesInfo.length === 0) {

            let error = new Error("bad request")
            error.status = 400
            return next(error)
        }
        let createItineraries = await Itinerary.insertMany(itinerariesInfo)
        return res.status(201).json({
            response: createItineraries
        })
    } catch (error) {
        next(error)
    }

}
export { create, createItineraries}