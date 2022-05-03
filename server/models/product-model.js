const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
//    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true, default: 0 },
    description: {type: String, required: true},
})

module.exports = model('Product', ProductSchema);