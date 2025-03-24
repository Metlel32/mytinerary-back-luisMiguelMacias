import express from "express"
import "dotenv/config.js"
import './config/database.js'
import cors from 'cors'
import morgan from "morgan"
import routerIndex from "./routes/index.js"
import error_handler from "./middlewares/error_handler.js"
import error_400 from "./middlewares/error_400.js"
import not_found_handler from "./middlewares/not_found_handler.js"



const PORT = process.env.PORT || 8080
const server = express()
const redy = () => console.log("working: " + PORT);


server.use(express.urlencoded({extended:true}))
server.use(express.json(), (error, req, res, next) => {
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON format. Check your syntax.",
            error: error
        })
    }
    next()
})
server.use(cors())
server.use(morgan('dev'))


server.use('/api', routerIndex)
server.use(error_400)
server.use(error_handler)
server.use(not_found_handler)


server.listen(PORT, "0.0.0.0", redy)
