const express = require('express')
const User = require('../models/user')
const Post = require('../models/post')

const router = express.Router()


router.post('/create', (req, res) => {
    const data = req.body

    User.findOne({ token: req.query.token }, (err, user) => {
        if (user) {
            Post(data).save(err => {
                if (err) {
                    res.json({ success: false })
                } else {
                    res.json({ success: true })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router