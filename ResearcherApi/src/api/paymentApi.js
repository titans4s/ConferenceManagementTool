const express = require('express');
const router = express.Router();
const Controller = require('../controller/paymentController');




module.exports = function () {
    router.post('/create',Controller.Createpayment);
    return router;
}