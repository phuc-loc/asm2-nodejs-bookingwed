const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel')

router.get('/home', hotelController.hotelList);
router.post('/hotel', hotelController.deleteHotel);
router.post('/add-hotel', hotelController.addHotel);

module.exports = router;