const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // it tells us some stats of what device hits our endpoint (the browser, computer, status, how long it took...)
app.use(BodyParser.json({limit: '50mb'})) // allow our express src to easily parse any json requests that are sent in
app.use(cors())

// routes in express:
app.get('/status', (req,res) => {
    res.send({
        message: 'Hello world!'
    })
})

app.post('/sign-in', (req, res) => {

});

app.get(`/self`, (req, res)=>{})
    //isAuth(userAuthType.admin), SelfController.adminInit);


app.listen(process.env.PORT || 3000)
