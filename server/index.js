const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Data = require('./data_schema.js')

const server = express()
const PORT = 8081

const dbroute = `mongodb+srv://amit:VNOn60Zqc7BuGT6c@timestampvalue-rmins.mongodb.net/test?retryWrites=true&w=majority&authSource=amit`

mongoose.connect(dbroute, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to db')
}).catch(err => {
    console.log(`DB not connected`)
})


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())
server.use(cors())

server.post('/addData', (req, res) => {
    const { value } = req.body
    const currentTime = new Date()
    const data = new Data()
    data.value = value
    data.timestamp = currentTime
    console.log(`Updating data ${data.value}`)
    data.save((err) => {
        if (err) return res.json({ 'success': false })
        else return res.json({ 'success': true })
    })

})


server.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ 'success': false })
        else return res.json({ 'success': true, 'data': data })
    })
})



server.listen(port = PORT, () => console.log('server is on'))