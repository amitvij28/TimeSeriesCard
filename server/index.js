const express = require('express')
const server = express()

server.get('/', (req, res) => {
    console.log(`Request by ${req.ip}`)
    res.send({ 'server': 'on' })
})

server.listen(port = 8081, () => console.log('server is on'))