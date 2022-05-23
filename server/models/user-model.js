const { Schema, model } = require('mongoose');

class Busket {
  productId;
  productName;
  price;
}
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String, required: true },
  roles: [{ type: String, ref: 'Role' }],
  busket: { type: Array, required: false },

})

module.exports = model('User', UserSchema);
