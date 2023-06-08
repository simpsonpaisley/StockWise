const mongoose = require('mongoose');

// Make Schema
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	sku: String,
	barcode: String,
	count: Number,
	lowStock: Number,
	notes: String,
	manufacturer: String,
	manufacturerRef: String,
	suppliers: Array,
	costHistory: Array,
	inventoryHistory: Array,
	onOrder: Boolean,
	orderDetails: Object,
	userID: String,
});

// Export Model

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
