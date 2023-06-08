const mongoose = require('mongoose');

// Create Schema

const { Schema } = mongoose;

const supplierSchema = new Schema({
	name: String,
	supplierRef: String,
	website: String,
	contacts: Array,
	userID: String,
});

// Export Model

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
