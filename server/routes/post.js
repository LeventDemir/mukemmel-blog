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


router.post('/edit', (req, res) => {
    const data = req.body

    User.findOne({ token: req.query.token }, (err, user) => {
        if (user) {
            Post.findOne({ _id: data._id }, (err, post) => {
                if (post) {
                    post.photo = data.photo
                    post.title = data.title
                    post.article = data.article

                    post.save(err => {
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
        } else {
            res.json({ success: false })
        }
    })
})


router.get('/posts', (req, res) => {
    Post.find({}, (err, posts) => {
        if (posts) {
            res.json(posts)
        } else {
            res.json({ success: false })
        }
    })
})


router.get('/post', (req, res) => {
    Post.findOne({ _id: req.query.post }, (err, post) => {
        if (post) {
            res.json(post)
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router