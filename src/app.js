const express = require('express')
const getData = require('./api_service')

const app = express()

app.get('', (req, res) => {
    getData(1, (data) => {
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log('App Started')
})