const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const user = require('./routes/user')


mongoose.connect('mongodb://localhost/leventcode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


mongoose.connection.on("open", () => console.log("✔ Connected to mongodb"));
mongoose.connection.on("error", () => console.log('!Mongodb connection error'));


app.use(bodyParser.json())
app.use('/user', user)


module.exports = app;