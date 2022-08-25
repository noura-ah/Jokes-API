const mongoose = require("mongoose")

const JokeScheme = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
        
    },
    {
        // this will create createAt and updateAt directly
        timestamps: true
    })

const Joke = mongoose.model("Joke", JokeScheme)

module.exports = Joke