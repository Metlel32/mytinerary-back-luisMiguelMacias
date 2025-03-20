import express from "express"
import "dotenv/config.js"
import './config/database.js'
import cors from 'cors'
import morgan from "morgan"
import routerIndex from "./routes/index.js"



const PORT = process.env.PORT || 8080
const server = express()
const redy = () => console.log("working: " + PORT);


server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))


server.use('/api', routerIndex)



server.listen(PORT, "0.0.0.0", redy)
