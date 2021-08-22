const express = require('express')
const cors = require('cors')
const Pokedex = require('pokedex-promise-v2')
const axios = require('axios')
const PORT = 6969

const P = new Pokedex()
const app = express()
app.use(cors())
app.use(express.json())

// Routes

app.get('/pokemon/:name', async (req, res) => {
    await P.getPokemonByName(req.params.name)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => console.log(err))
})

app.listen(PORT, () => {
    console.log(`listening on your favorite port! (${PORT})`)
})
