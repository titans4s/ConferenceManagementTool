const express = require('express');
const router = express.Router();
const Controller = require('../controller/researcherController');




module.exports = function () {
    router.post('/create', Controller.CreateResearcher);
    router.get('/get', Controller.getAllReseracher);
    router.get('/:id', Controller.getOneSubjectResearch);
    router.put('/update/:id', Controller.approval);
    router.put('/update/disapproved/:id', Controller.disapproval);
    router.delete('/delete/:id', Controller.ondelete);
    router.get('/get/:email', Controller.findapproval);
    router.put('/updatepayment/:id',Controller.updatepayment);
 
    return router;
}