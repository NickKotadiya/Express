const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String, // short hand property
    lastName: {
        type: String, // long hand property
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    address: {
        line1: String,
        line2: String,
        pincode: Number
    }
});
module.exports = mongoose.model('users', userSchema)