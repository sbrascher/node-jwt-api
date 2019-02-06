'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authorize = require('../services/auth-service');

router.post('/invite', authorize.authorize, controller.invite);
router.post('/invitereminder', authorize.authorize, controller.inviteReminder);
router.post('/update/name', authorize.authorize, controller.updateName);


module.exports = router;