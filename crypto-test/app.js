const express = require('express')
const Sodium = require('./sodium')

const app = express()

const port = process.env.PORT || 8080

const MAX_SIGNED_INT = 0x7fffffff

app.get('/', async (req, res) => {
    const upperBound = req.params.upperBound || MAX_SIGNED_INT
    const randomNumber = await Sodium.getRandomNumber(upperBound)
    res.send(`${randomNumber}`)
})

app.listen(port, async () => {
    console.log(`Server started on port ${port}`)
})