const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE);

//Import Models
const Product = require('./models/product');
const Manufacturer = require('./models/manufacturer');
const Supplier = require('./models/supplier');
const Variant = require('./models/variants');
// Create Seeds

async function seed() {
	await Product.create({
		name: 'Cornflakes',
		sku: 'CF001',
		manufacturer: 'Kelloggs',
		manufacturerRef: 'kellogs',
		suppliers: ['morrisons', 'tesco', 'asda', 'waitrose'],
		variants: ['CF001-500', 'CF001-1000'],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Product.create({
		name: 'Coke Zero',
		sku: 'CZ001',
		manufacturer: 'Coca Cola',
		manufacturerRef: 'cocacola',
		suppliers: ['morrisons', 'esso', 'asda'],
		variants: ['CZ001-330', 'CZ001-500', 'CZ001-1000'],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Variant.create({
		name: 'Cornflakes 500g',
		sku: 'CF001-500',
		parentProduct: 'CF001',
		barcode: '123456789',
		count: 100,
		lowStock: 10,
		notes: 'This is a note',
		costHistory: [
			{ supplierRef: 'morrisons', cost: 1.5, date: '2021-01-01' },
			{ supplierRef: 'tesco', cost: 1.6, date: '2021-01-02' },
			{ supplierRef: 'asda', cost: 1.7, date: '2021-01-03' },
			{ supplierRef: 'waitrose', cost: 1.8, date: '2021-01-04' },
		],
		inventoryHistory: [
			{ date: '2023-07-30', sold: 10 },
			{ date: '2023-07-29', sold: 5 },
		],
		onOrder: false,
		orderDetails: [
			{
				date: '2023-06-31',
				supplierRef: 'morrisons',
				quantity: 100,
				delivered: true,
				dateDelivered: '2023-07-01',
			},
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Variant.create({
		name: 'Cornflakes 1000g',
		sku: 'CF001-1000',
		parentProduct: 'CF001',
		barcode: '234567890',
		count: 50,
		lowStock: 10,
		notes: 'This is another note',
		costHistory: [
			{ supplierRef: 'morrisons', cost: 2.5, date: '2021-01-01' },
			{ supplierRef: 'tesco', cost: 2.6, date: '2021-01-02' },
			{ supplierRef: 'asda', cost: 2.7, date: '2021-01-03' },
			{ supplierRef: 'waitrose', cost: 2.8, date: '2021-01-04' },
		],
		inventoryHistory: [
			{ date: '2023-07-30', sold: 8 },
			{ date: '2023-07-29', sold: 2 },
			{ date: '2023-07-28', sold: 5 },
		],
		onOrder: true,
		orderDetails: [
			{
				date: '2023-06-31',
				supplierRef: 'morrisons',
				quantity: 100,
				delivered: false,
				dateDelivered: '',
			},
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Variant.create({
		name: 'Coke Zero 330ml',
		sku: 'CZ001-330',
		parentProduct: 'CZ001',
		barcode: '345678901',
		count: 25,
		lowStock: 12,
		notes: 'Being Discontinued, order as must as possible',
		costHistory: [
			{ supplierRef: 'morrisons', cost: 0.5, date: '2021-01-01' },
			{ supplierRef: 'esso', cost: 0.6, date: '2021-01-02' },
			{ supplierRef: 'asda', cost: 0.7, date: '2021-01-03' },
		],
		inventoryHistory: [
			{ date: '2023-07-30', sold: 8 },
			{ date: '2023-07-29', sold: 2 },
			{ date: '2023-07-28', sold: 5 },
		],
		onOrder: true,
		orderDetails: [
			{
				date: '2023-06-31',
				supplierRef: 'morrisons',
				quantity: 100,
				delivered: false,
				dateDelivered: '',
			},
			{
				date: '2023-06-01',
				supplierRef: 'esso',
				quantity: 100,
				delivered: true,
				dateDelivered: '2023-06-05',
			},
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Variant.create({
		name: 'Coke Zero 500ml',
		sku: 'CZ001-500',
		parentProduct: 'CZ001',
		barcode: '456789012',
		count: 36,
		lowStock: 12,
		notes: 'This is a note',
		costHistory: [
			{ supplierRef: 'morrisons', cost: 0.5, date: '2021-01-01' },
			{ supplierRef: 'esso', cost: 0.6, date: '2021-01-02' },
			{ supplierRef: 'asda', cost: 0.7, date: '2021-01-03' },
		],
		inventoryHistory: [
			{ date: '2023-07-30', sold: 8 },
			{ date: '2023-07-29', sold: 2 },
			{ date: '2023-07-28', sold: 3 },
		],
		onOrder: false,
		orderDetails: [
			{
				date: '2023-06-31',
				supplierRef: 'morrisons',
				quantity: 100,
				delivered: true,
				dateDelivered: '2023-07-25',
			},
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Variant.create({
		name: 'Coke Zero 1000ml',
		sku: 'CZ001-1000',
		parentProduct: 'CZ001',
		barcode: '567890123',
		count: 24,
		lowStock: 12,
		notes: 'See if we can list on Amazon',
		costHistory: [
			{ supplierRef: 'morrisons', cost: 0.5, date: '2021-01-01' },
			{ supplierRef: 'esso', cost: 0.6, date: '2021-01-02' },
			{ supplierRef: 'asda', cost: 0.7, date: '2021-01-03' },
		],
		inventoryHistory: [
			{ date: '2023-07-30', sold: 50 },
			{ date: '2023-07-29', sold: 2 },
			{ date: '2023-07-28', sold: 3 },
		],
		onOrder: true,
		orderDetails: [
			{
				date: '2023-06-31',
				supplierRef: 'morrisons',
				quantity: 100,
				delivered: false,
				dateDelivered: '',
			},
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});

	await Manufacturer.create({
		name: 'Kelloggs',
		manufacturerRef: 'kellogs',
		website: 'https://www.kelloggs.co.uk/en_GB/home.html',
		contacts: [
			{ name: 'Kevin', email: 'kevin@fakemail.com', phone: '01234567890' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Manufacturer.create({
		name: 'Coca Cola',
		manufacturerRef: 'cocacola',
		website: 'https://www.coca-cola.co.uk/',
		contacts: [
			{ name: 'Steve', email: 'steve@fakemail.com', phone: '12325185615' },
			{ name: 'Bob', email: 'bob@fakemail.com', phone: '12345678910' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});

	await Supplier.create({
		name: 'Morrisons',
		supplierRef: 'morrisons',
		website: 'https://groceries.morrisons.com/webshop/startWebshop.do',
		contacts: [
			{ name: 'John', email: 'john@fakemail.com', phone: '012565421385' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Supplier.create({
		name: 'Tesco',
		supplierRef: 'tesco',
		website: 'https://www.tesco.com/',
		contacts: [
			{ name: 'Dave', email: 'dave@fakemail.com', phone: '01234567890' },
			{ name: 'Steve', email: 'steve2@fakemail.com', phone: '01234567890' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Supplier.create({
		name: 'Asda',
		supplierRef: 'asda',
		website: 'https://groceries.asda.com/',
		contacts: [
			{ name: 'Lisa', email: 'lisa@fakemail.com', phone: '01234567890' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Supplier.create({
		name: 'Waitrose',
		supplierRef: 'waitrose',
		website: 'https://www.waitrose.com/',
		contacts: [
			{ name: 'Sarah', email: 'sarah@fakemail.com', phone: '01234567890' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});
	await Supplier.create({
		name: 'Esso',
		supplierRef: 'esso',
		website: 'https://www.esso.co.uk/',
		contacts: [
			{ name: 'Bob', email: 'bob2@fakemail.com', phone: '01234567890' },
			{ name: 'Stuart', email: 'stuart@fakemail.com', phone: '01234567890' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
	});

	console.log('DB Seeded');
	mongoose.disconnect();
}
seed();
