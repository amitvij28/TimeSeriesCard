const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Data = new Schema(
    {
        timestamp: { type: Date },
        value: { type: Number }
    }
)

module.exports = mongoose.model('Data', Data)            