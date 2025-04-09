import Itinerary from "../../models/Itinerary.js";
let update = async (req, res, next) => {
    try {
        let itineraryInfo = req.body
        let updateItinerary = await Itinerary.updateOne(
            {name: itineraryInfo.name},
            {activities: itineraryInfo.activities}
        )
        return res.status(200).json({
            response: updateItinerary
        })
    } catch (error) {
        next(error)
    }
}


export {update}