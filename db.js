const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('database connected ');


});

db.on('error', (err) => {
    console.log('connection error:', err);
});

db.on('disconnected', () => {

    console.log('disconneted');
});

module.exports = db;