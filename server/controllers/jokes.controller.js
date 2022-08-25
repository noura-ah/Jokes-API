const Joke = require("../models/jokes.model")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(singleJoke => res.json({ joke: singleJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deletedJoke => res.json({ joke: deletedJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findRandom = (req, res) => {
    Joke.countDocuments()
        .then(count => {
            var random = Math.floor(Math.random() * count)
            // skip() to skip docs equal to random number 
            // if random =1 , skip will skip first doc and find one will return second doc
            Joke.findOne().skip(random)
                .then(randomJoke => res.json({ joke: randomJoke }))
                .catch(err => res.json({ message: "something went wrong", error: err }))
        })
        .catch(err => res.json({ message: "something went wrong", error: err }))

}