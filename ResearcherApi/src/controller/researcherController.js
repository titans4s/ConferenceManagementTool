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
    ondelete
};