const express = require('express')
const User = require('../models/user')
const Post = require('../models/post')
const admin = require('../middleware/admin')

const router = express.Router()


router.post('/create', admin, (req, res) => {
    const data = req.body

    Post(data).save(err => {
        if (err) {
            res.json({ success: false })
        } else {
            res.json({ success: true })
        }
    })
})


router.post('/edit', admin, (req, res) => {
    const data = req.body

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
})


router.post('/delete', admin, (req, res) => {
    Post.findOne({ _id: req.body.post }, (err, post) => {
        if (post) {
            post.remove(err => {
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


router.get('/posts', (req, res) => {
    const skip = (req.query.page - 1) * 4

    Post.find({}, (err, posts) => {
        if (posts) {
            Post.countDocuments({}, (err, count) => {
                res.json({ posts, count })
            })
        } else {
            res.json({ success: false })
        }
    })
        .sort({ $natural: -1 })
        .limit(4)
        .skip(skip)
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