const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({

    paperid: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'researches' },
    email: { type: String, required: true },
    cardholder: { type: "string", required: true, trim: true },
    cardnumber: { type: "string", required: true, trim: true },
    month: { type: "string", required: true, trim: true },
    year: { type: "string", required: true, trim: true },
    cvc: { type: "string", required: true, trim: true }





});

const Payment = mongoose.model('payment', PaymentSchema);
module.exports = Payment;
