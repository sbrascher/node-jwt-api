'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


if (process.env.NODE_ENV === 'production') {
    require('dotenv').load();
}


const config = require('./config');

const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Database connection
mongoose.set("debug", true);
mongoose.connect(config.connectionString, { useNewUrlParser: true });

// Load models
const User = require('./models/user');

// Load routes
const indexRoute = require('./routes/index-route');

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Version');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Rotes settings
app.use('/', indexRoute);



module.exports = app;