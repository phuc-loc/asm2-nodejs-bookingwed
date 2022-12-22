const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home')

router.get('/home', homeController.featuredLish);
router.get('/home', homeController.browseByPropertyType)

module.exports = router; 