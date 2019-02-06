'use strict';

const express = require('express');
const router = express.Router();
var ejs = require('ejs');

router.get('/', (req, res, next) => {
    res.render('index',{});
});

router.get('/api', (req, res, next) => {
    res.status(200).send({
        title: "Security - API",
        version: "1.0.0"
    });
});

module.exports = router;