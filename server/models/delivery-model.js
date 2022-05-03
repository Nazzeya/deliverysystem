const {Schema, model} = require('mongoose');

const DeliverySchema = new Schema({
    order: {type: Schema.Types.ObjectId, ref: 'Order'},
    delivery_type: {type: String, required: true, default: "Delivery"},
})

module.exports = model('Delivery', DeliverySchema);