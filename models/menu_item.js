const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:['sweet','sour','bitter','spicy'],         
        required:true,

    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_salses:{
        type:Number,
        default:0,
    }
});
    
const MenuItems = mongoose.model('menuItems', menuSchema);
module.exports = MenuItems;
