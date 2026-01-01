const express = require('express');

const MenuItems = require('../models/menu_item');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuitems = new MenuItems(data);

        const response = await newMenuitems.save();
        console.log("menu item saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItems.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;

        if (taste == 'sweet' || taste == 'sour' || taste == 'bitter' || taste == 'spicy') {
            const data = await MenuItems.find({ taste: taste });
            res.status(200).json(data);
        }
        else {
            res.status(400).json({ error: "invalid taste value" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;

        const updatedMenuItemsData = req.body;
        const response = await MenuItems.findByIdAndUpdate(menuId, updatedMenuItemsData, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: "menu item not found" });
        }
        console
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const response = await MenuItems.findByIdAndDelete(menuId);
        if (!response) {
            return res.status(404).json({ error: "menu item not found" });

        }
        console.log("menu item deleted");
        res.status(200).json({ message: "menu item deleted successfully" });
    } catch {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})

module.exports = router;