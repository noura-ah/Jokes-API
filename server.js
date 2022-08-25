const mongoose = require("mongoose")
const express = require("express")
const exp = require("constants")
const app = express()

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true}))

const AllJokesRoutes = require("./server/routes/jokes.routes")
AllJokesRoutes(app)

app.listen(8000, () => console.log("This server is fired up on port 8000"))