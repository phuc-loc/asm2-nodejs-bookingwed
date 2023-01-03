const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel')

router.get('/home', hotelController.hotelList);

module.exports = router; 