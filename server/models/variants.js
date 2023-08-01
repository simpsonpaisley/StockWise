const mongoose = require('mongoose');

// Make Schema

const { Schema } = mongoose;

const variantSchema = new Schema({
	name: String,
	sku: String,
	parentProduct: String,
	barcode: String,
	count: Number,
	lowStock: Number,
	notes: String,
	costHistory: Array,
	inventoryHistory: Array,
	onOrder: Boolean,
	orderDetails: Array,
	userID: String,
});

const Variant = mongoose.model('Variant', variantSchema);

module.exports = Variant;
