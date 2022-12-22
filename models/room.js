const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema ({
    title: String,
    price: Number,
    maxPeople: Number,
    desc: String,
    roomNumbers: Array
})

module.exports = mongoose.model('Room', roomSchema)