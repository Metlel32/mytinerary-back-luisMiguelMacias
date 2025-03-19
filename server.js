import express from "express"
import "dotenv/config.js"

const PORT = process.env.PORT || 8080
const server = express()
const redy = () => console.log("working: " + PORT);




server.listen(PORT, redy)
