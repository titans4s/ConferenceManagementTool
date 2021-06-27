const Payment = require('../model/payment');


const Createpayment = async (req, res) => {
    if(req.body){
        const payment = new Payment(req.body);
        await payment.save()
            .then(data =>{
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


module.exports = {
    Createpayment
};