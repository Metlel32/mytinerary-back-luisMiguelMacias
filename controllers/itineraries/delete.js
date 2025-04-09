import Itinerary from "../../models/Itinerary.js";

let deleteItinerary = async (req, res , next) => {
    try {
        let itineraryInfo = req.body
        let deleteItinerary = await Itinerary.deleteOne(
            {name: itineraryInfo.name}
        )
        return res.status(200).json({
            response: deleteItinerary
        })
    } catch (error) {
        next(error)
    }
}






export {deleteItinerary}