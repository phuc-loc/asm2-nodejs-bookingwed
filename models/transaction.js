const mongoose = require('mongoose');
const hotel = require('./hotel');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: String,
    hotel: Schema.Types.ObjectId,
    room: Array,
    dateStart: Date,
    dateEnd: Date,
    price: Number, //!!
    payment: Array,
    status: Array
})

module.exports = mongoose.model('Transaction', transactionSchema);