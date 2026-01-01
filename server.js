const express = require('express');

const app = express();

const db = require('./db');

const bodyPaser = require('body-parser');

app.use(bodyPaser.json());

const MenuItems = require('./models/menu_item');

app.get('/', (req, res) => {
    res.send("hello world");

});

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/menu', menuRoutes);
app.use('/person', personRoutes)

app.listen(3000, () => {
    console.log('server is running on the port 3000');
})