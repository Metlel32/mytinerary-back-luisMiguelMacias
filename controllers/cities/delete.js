import City from "../../models/City.js";

let deleteCity = async (req, res , next) => {
    try {
        let cityInfo = req.body
        let deleteCity = await City.deleteOne(
            {name: cityInfo.name}
        )
        return res.status(200).json({
            response: deleteCity
        })
    } catch (error) {
        next(error)
    }
}

export {deleteCity}