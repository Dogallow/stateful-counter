const mongoose = require('mongoose')

// Schema
const Schema = mongoose.Schema;
const NumberValue = new Schema({
    body: Number,
})

// Model
const Value = mongoose.model('Value', NumberValue)


module.exports = Value;
