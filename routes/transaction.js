const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction')

router.post('/booking', transactionController.booking);
router.post('/transaction', transactionController.saveTrans);
router.post('/transaction/dashboard', transactionController.postTrans);
router.get('/admin/transaction', transactionController.getTrans);

module.exports = router;