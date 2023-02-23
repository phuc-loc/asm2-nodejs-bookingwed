const mongoose = require('mongoose');
const hotel = require('./hotel');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    userId: String,
    hotel: Schema.Types.ObjectId,
    rooms: Array,
    dateStart: String,
    dateEnd: String,
    price: Number, //!!
    payment: String,
    status: Array
})

module.exports = mongoose.model('Transaction', transactionSchema);