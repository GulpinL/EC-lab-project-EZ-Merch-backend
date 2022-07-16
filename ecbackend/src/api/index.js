const express = require("express");
const router = express.Router();
const passport=require('../modules/passport');

//Login
const loginApiRouter=require('./login');
router.use('/noneAuthen',loginApiRouter);

module.exports = router;