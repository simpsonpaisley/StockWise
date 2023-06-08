const mongoose = require('mongoose');

// Make Schema

const { Schema } = mongoose;

const manufacturerSchema = new Schema({
	name: String,
	manufacturerRef: String,
	website: String,
	contacts: Array,
	userID: String,
});

// Export Model

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;
