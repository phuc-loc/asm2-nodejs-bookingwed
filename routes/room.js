const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room')

router.post('/search', roomController.searchRoom);
router.get('/rooms', roomController.getRooms);
router.post('/add-room', roomController.postRoom);
router.post('/delete-room', roomController.deleteRoom);

module.exports = router; 