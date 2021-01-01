const express = require('express')
const Sodium = require('./sodium')

const app = express()

const port = process.env.PORT || 8080

const MAX_UNSIGNED_INT = (2 ** 32) - 1

app.get('/', async (req, res) => {
    const upperBound = req.params.upperBound || MAX_UNSIGNED_INT
    const randomNumber = await Sodium.getRandomNumber(upperBound)
    res.send(`${randomNumber}`)
})

app.listen(port, async () => {
    console.log(`Server started on port ${port}`)
})