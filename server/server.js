// Importing dependencies.
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const bp = require('body-parser');
app.use(bp.json());
mongoose.connect(process.env.DATABASE);
const Product = require('./models/product');
const Supplier = require('./models/supplier');
const Manufacturer = require('./models/manufacturer');
const Variant = require('./models/variants');

// Root Route
app.get('/', (request, response) => {
	response.json('Root Route');
});

// Get All Products for User
app.get('/products', async function (request, response) {
	const products = await Product.find(request.query);
	response.json(products);
});

// Get All Suppliers for User

app.get('/suppliers', async function (request, response) {
	const suppliers = await Supplier.find(request.query);
	response.json(suppliers);
});

// Get All Manufacturers for User
app.get('/manufacturers', async function (request, response) {
	const manufacturers = await Manufacturer.find(request.query);
	response.json(manufacturers);
});

// Get All Variants for User
app.get('/variants', async function (request, response) {
	const variants = await Variant.find(request.query);
	response.json(variants);
});

app.listen(PORT, () => {
	console.log('App is listening on Port ' + PORT);
});
