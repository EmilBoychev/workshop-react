const mongoose = require('mongoose');
const express = require('express');

const cors = require('./src/middlewares/cors');
const auth = require('./src/middlewares/auth');
const glassesController = require('./src/controllers/glassesController');
const usersController = require('./src/controllers/users');


async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/glasses-shop');

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(auth());

    app.use('/glasses', glassesController);
    app.use('/users', usersController);

    app.listen(5000, () => console.log('REST Service started on port 5000'));
}


start();