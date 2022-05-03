const {Schema, model} = require('mongoose');

const PaymentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    payment_type: {type: String, required: true, default: "Cash"},
})

module.exports = model('Payment', PaymentSchema)