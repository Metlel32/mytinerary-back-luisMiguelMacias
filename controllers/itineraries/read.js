import Itinerary from "../../models/Itinerary.js";

let allItineraries = async (req, res, next) => {
    try {
        let all = await Itinerary.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}



let itineraryById = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams
        let itineraryId = await Itinerary.findById(idQuery)
        return res.status(200).json({
            response: itineraryId
        })
    } catch (error) {
        next(error)
    }
}

let itineraryByCity = async (req, res, next) => {
    try {
        let cityQuery = req.params.nameParams
        let itineraryCity = await Itinerary.find({name: cityQuery})
        return res.status(200).json({
            resposne: itineraryCity
        })
    } catch (error) {
        next(error)
    }
}

export {allItineraries, itineraryById, itineraryByCity}