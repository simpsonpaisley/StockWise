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
