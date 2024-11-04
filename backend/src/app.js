const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // it tells us some stats of what device hits our endpoint (the browser, computer, status, how long it took...)
app.use(bodyParser.json()) // allow our express app to easily parse any json requests that are sent in
app.use(cors())

// route in express:
app.get('/status', (req,res) => {
    res.send({
        message: 'Hello world!'
    })
})

app.listen(process.env.PORT || 8081)
