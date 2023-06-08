const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE);

//Import Models
const Product = require('./models/product');
const Manufacturer = require('./models/manufacturer');
const Supplier = require('./models/supplier');

// Create Seeds
