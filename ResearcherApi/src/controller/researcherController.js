const Researcher = require('../model/researcher');


const CreateResearcher = async (req, res) => {
    if(req.body){
        const research = new Researcher(req.body);
        await research.save()
            .then(data =>{
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const approval = async (req, res) => {
    if (req.params && req.params.id) {
        let userid = req.params.id;
        
        await Researcher.findByIdAndUpdate(userid,{$set:{status:'approved'}})
            .then(data => {
                res.status(200).send({status:"user status approved"});
            }).catch(error => {
                console.log({ status: "Error with updating data", error: err.message });
              })
        
    }
   
}
const getapprovedpaid = async (req, res) => {
    await Researcher.find({ status: "approved",payment:"paid" })
    .then(data => {
        res.status(200).send({ data: data });
    }).catch(error => {
        console.log({ error: error.message });
    });
}

const updatepayment = async (req, res) => {
    if (req.params && req.params.id) {
        let paperid = req.params.id;
        
        await Researcher.findByIdAndUpdate(paperid,{$set:{payment:'paid'}})
            .then(data => {
                res.status(200).send({status:"payment status approved"});
            }).catch(error => {
                console.log({ status: "Error with updating data", error: err.message });
              })
        
    }
}

const findapproval = async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
        await Researcher.find({email:Email,status:"approved"})
            .then(data => {
                res.status(200).send({data:data});
            }).catch((err) => {
                console.log(err.message);
            res.status(500).send({ status: "Error loading approved papers", error: err.message });
        })
    }
}

const findnotapproval = async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
        await Researcher.find({email:Email,status:"not approved"})
            .then(data => {
                res.status(200).send({data:data});
            }).catch((err) => {
                console.log(err.message);
            res.status(500).send({ status: "Error loading not approved papers", error: err.message });
        })
    }
}

const ondelete = async (req, res) => {
    if (req.params && req.params.id) {
        let paperid = req.params.id;

        await Researcher.findByIdAndDelete(paperid).then(() => {
            res.status(200).send({ status: "paper deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })
    }
}


const disapproval = async (req, res) => {
    if (req.params && req.params.id) {
        let userid = req.params.id;
        
        await Researcher.findByIdAndUpdate(userid,{$set:{status:'not approved'}})
            .then(data => {
                res.status(200).send({status:"user status is not approved"});
            }).catch(error => {
                console.log({ status: "Error with updating data", error: err.message });
              })
        
    }
   
}
const getAllReseracher = async (req, res) => {
    await Researcher.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            console.log({ error: error.message });
        });
}

const getOneSubjectResearch = async (req, res)=>{
    if (req.params && req.params.id) {
        await Researcher.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                console.log({ error: error.message });
              })
        
    }
}


module.exports = {
    CreateResearcher,
    getAllReseracher,
    getOneSubjectResearch,
    approval,
    disapproval,
    ondelete,
    findapproval,
    updatepayment,
    findnotapproval,
    getapprovedpaid
};