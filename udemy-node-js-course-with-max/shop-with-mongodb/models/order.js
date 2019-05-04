const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	user: {
		email: {
			type: String,
			required: true
		},
		userId: {
			type: Schema.Types.ObjectId,
			required: true
		}
	},
	products: [ { product: Object, quantity: Number } ]
});

module.exports = mongoose.model('Order', orderSchema);
