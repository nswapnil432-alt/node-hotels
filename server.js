const express = require('express');

const app = express();

 require('./db');

 require('dotenv').config();
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is running on the port 3000');
})