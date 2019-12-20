const User = require('../models/user')


module.exports = (req, res, next) => {
    User.findOne({ token: req.query.token }, (err, user) => {
        if (user) {
            next()
        } else {
            res.json({ success: false })
        }
    })
}