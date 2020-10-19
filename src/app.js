const express = require('express')
const getData = require('./api_service')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
    getData(1, (data) => {
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`App Started on port: ${port}`)
})