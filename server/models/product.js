const mongoose = require('mongoose');

// Make Schema
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	sku: String,
	manufacturer: String,
	manufacturerRef: String,
	suppliers: Array,
	variants: Array,
	userID: String,
});

// Export Model

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
