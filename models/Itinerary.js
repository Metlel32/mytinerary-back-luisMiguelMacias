import {Schema, model} from 'mongoose'




let collection = "Itineraries"
let schema = Schema({
    name: { type: String, required: true },
    imageItinerary: { type: String, required: true },
    imageProfile: { type: String, required: true },
    price: { type: Number, required: true },
    nameProfile: { type: String, required: true},
    hashtags: { type: [String], default: []},
    duration: {type: Number, required: true},
    likes: {type: Number, required:true},
    activities: {type: Schema.ObjectId, ref:''}
},{
    timestamps: true
  })

let Itinerary = model(collection, schema)
export default Itinerary