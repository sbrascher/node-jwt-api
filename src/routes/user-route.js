'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authorize = require('../services/auth-service');

router.post('/create', authorize.authorize, controller.create);
router.post('/update/name', authorize.authorize, controller.updateName);


module.exports = router;