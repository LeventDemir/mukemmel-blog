const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const user = require('./routes/user')
const post = require('./routes/post')


mongoose.connect('mongodb://localhost/leventcode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


mongoose.connection.on("open", () => console.log("✔ Connected to mongodb"));
mongoose.connection.on("error", () => console.log('!Mongodb connection error'));


app.use(bodyParser.json({ limit: '5mb' }))
app.use('/user', user)
app.use('/post', post)


module.exports = app;