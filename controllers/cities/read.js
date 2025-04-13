import City from "../../models/City.js";
import  "../../models/Itinerary.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find().populate('itineraries', '_id name imageItinerary imageProfile price nameProfile hashtags duration likes').exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}



let cityByID = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams
        let cityId = await City.findById(idQuery).populate('itineraries', 'name imageItinerary imageProfile price nameProfile hashtags duration likes').exec()
        return res.status(200).json({
            response: cityId
        })
    } catch (error) {
        next(error)
    }
}

export {allCities, cityByID}