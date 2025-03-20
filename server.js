import express from "express"
import "dotenv/config.js"
import './config/database.js'
import cors from 'cors'
import morgan from "morgan"



const PORT = process.env.PORT || 8080
const server = express()
const redy = () => console.log("working: " + PORT);


//usar cors y morgan
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))



//al agregar una ip local puedo ver en cualquier dispositivo de mi red
server.listen(PORT, "0.0.0.0", redy)
