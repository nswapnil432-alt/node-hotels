const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/mydatabase';

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