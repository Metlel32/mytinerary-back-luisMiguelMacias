import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find()
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
        let cityId = await City.findById(idQuery)
        return res.status(200).json({
            response: cityId
        })
    } catch (error) {
        next(error)
    }
}

export {allCities, cityByID}