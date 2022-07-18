const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');


const blacklist = new Set();

const JWT_SECRET = 't gcsergcserg  b920n3w4pc[w3tcawert6v9';

async function register(userName, password) {
    // check if email is taken
    const existing = await User.findOne({ userName });

    if (existing) {
        throw new Error('Ussername is taken');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store user
    const user = new User({
        userName,
        hashedPassword
    });

    await user.save();

    return createSession(user);
}

async function login(userName, password) {
    // check if user exists
    const user = await User.findOne({ userName });

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    // verify password
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return createSession(user);
}

function logout(token) {
    blacklist.add(token);
}

function createSession(user) {
    // let admin = false;
    // console.log(user);
    // if (user.admin === 'true') {
    //     admin = true
    // }


    const payload = {
        userName: user.userName,
        _id: user._id,
        // admin
    };

    const accessToken = jwt.sign(payload, JWT_SECRET);

    return {
        userName: user.userName,
        accessToken,
        _id: user._id,
        // admin
    };
}

function validateToken(token) {
    if (blacklist.has(token)) {
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    logout,
    validateToken
};