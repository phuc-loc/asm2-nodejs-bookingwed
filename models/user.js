const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    fullName: String,
    phoneNumber: String,
    email: String,
    isAdmin: Boolean
})

module.exports = mongoose.model('User', userSchema);