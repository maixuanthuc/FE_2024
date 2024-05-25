// In server.js or a separate route file
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            password: await bcrypt.hash(password, 10),
            email,
        });

        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
