const mongoose = require('mongoose')


const User = mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    login: {
        required: true,
        type: Number
    },
    token: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('User', User)