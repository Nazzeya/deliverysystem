const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    products: {type: Schema.Types.ObjectId, ref: 'Product'},
    number: {type: String }},
    { timestamps: true })

module.exports = model('Order', OrderSchema);