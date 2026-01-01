const express = require('express');

require('dotenv').config();
const app = express();

require('./db');

const bodyPaser = require('body-parser');

app.use(bodyPaser.json());


app.get('/', (req, res) => {
    res.send("hello world");

});

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/menu', menuRoutes);
app.use('/person', personRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is running on the port 3000');
})