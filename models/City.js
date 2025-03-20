import { Schema, model } from "mongoose";


let collection = "Cities"
let schema = Schema({
    name: { type: String, required: true },
    images: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, default: true },
    description: { type: String, required: true},
    currency: { type: String, required: true}
},{
    timestamps: true
  })

let City = model(collection, schema)
export default City