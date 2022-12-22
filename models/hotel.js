const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: String,
    type: String,
    city: String,
    address: String,
    distance: String,
    photos: Array,
    desc: String,
    rating: Number, 
    featured: Boolean,
    rooms: Array
})

module.exports = mongoose.model('Hotel', hotelSchema);