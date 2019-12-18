const express = require('express')
const User = require('../models/user')

const router = express.Router()


// create token
const createToken = () => {
    const letters = [...Array(52).keys()].map(i =>
        i > 25 ? String.fromCharCode(i + 71) : String.fromCharCode(i + 65)
    );

    let token = "";

    for (let x = 0; x < 100; x++) {
        token += letters[Math.floor(Math.random() * letters.length)];
    }

    return token;
}


router.post('/login', (req, res) => {
    const data = req.body

    User.findOne({}, (err, user) => {
        if (user.username === data.username && user.password === data.password) {
            const token = createToken()

            user.token = token
            user.login = new Date().getTime()

            user.save(err => {
                if (err) {
                    res.json({ success: false })
                } else {
                    res.json({ token })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router