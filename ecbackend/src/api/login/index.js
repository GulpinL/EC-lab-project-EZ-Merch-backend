const express = require('express');
const router = express.Router();

const loginController = require('./login.controller');

// routing goes here
router.post('/signInLocal', loginController.signInLocal);

//
module.exports = router;