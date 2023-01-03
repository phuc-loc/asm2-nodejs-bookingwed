const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room')

router.post('/search', roomController.searchRoom);

module.exports = router;