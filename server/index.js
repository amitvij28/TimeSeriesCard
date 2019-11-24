const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Data = require('./data_schema.js')

const server = express()
const app = require('http').Server(server)
const io = require('socket.io')(app)


const PORT = 8081

const dbroute = `mongodb+srv://amit:VNOn60Zqc7BuGT6c@timestampvalue-rmins.mongodb.net/test?retryWrites=true&w=majority&authSource=amit`

const admin = {
    username: 'admin',
    password: '12345'
}
io.on('connection', client => {
    console.log('connected to client')
})

mongoose.connect(dbroute, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to db')
}).catch(err => {
    console.log(`DB not connected`)
})


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())
server.use(cors())

server.post('/addData', (req, res) => {
    console.log(`/addData ${req.connection.remoteAddress}`)
    const { value } = req.body
    const currentTime = new Date()
    const data = new Data()
    data.value = value
    data.timestamp = currentTime
    console.log(`Updating data ${data.value}`)
    data.save((err) => {
        if (err) return res.json({ 'success': false })
        else {
            io.emit('new_data', { newdata: data })
            res.json({ 'success': true })
        }
    })


})




server.get('/getData', (req, res) => {
    console.log(`/getData ${req.connection.remoteAddress}`)
    Data.find((err, data) => {
        if (err) return res.json({ 'success': false })
        else return res.json({ 'success': true, 'data': data })
    })
})

server.post('/login', (req, res) => {
    console.log(`/login ${req.connection.remoteAddress}`)
    const { username, password } = req.body
    if (username === admin.username && password === admin.password) {
        console.log('login successful')
        return res.json({ 'login': true })
    }
    console.log('login unsuccessful')
    return res.json({ 'login': false })

})


app.listen(port = PORT, () => console.log('server is on'))