const mongoose = require('mongoose')


const Post = mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleDateString()
    }
})


module.exports = mongoose.model('Post', Post)