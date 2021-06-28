const Administrator = require('../models/administrators');
const Workshop = require('../models/workshop.models');
const conferenceDetails = require('../models/conferenceDetails');
const Researcher = require('../models/researcher');
const Payment = require('../models/payment');


//Manage Administrators
//Add Administrators
const createadministrator = async(req, res) => {
    if (req.body) {
        const administrator = new Administrator(req.body);
        administrator.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAdministrators = async(req, res) => {
    await Administrator.find({}).populate('administrations', 'username password usertype')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const deleteAdministrators = async(req, res) => {
    let userid = req.params.id;

    await Administrator.findByIdAndDelete(userid).then(() => {
        res.status(200).send({ status: "user deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });
    })

}

const updateAdministrator = async(req, res) => {
    let userid = req.params.id;
    const { username, password, usertype } = req.body;
    const updateAdministrators = {
        username,
        password,
        usertype
    }
    await Administrator.findByIdAndUpdate(userid, updateAdministrators)
        .then(() => {
            res.status(200).send({ status: "User updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
}


const getTotalAdministrators = async(req, res) => {
    await Administrator.find({}).countDocuments()
        .then(data => {
            res.status(200).send({ totalAdmins: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Manage conference details
const getConferencedetails = async(req, res) => {
    await conferenceDetails.find({}).populate('conferencedetails', 'about FromDate ToDate venue sponsers speakers status')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const updateConferencedetails = async(req, res) => {
    let cid = req.params.id;
    const { status } = req.body;
    const updateConferenceDetail = {
        status
    }
    await conferenceDetails.findByIdAndUpdate(cid, updateConferenceDetail)
        .then(() => {
            res.status(200).send({ status: "Conference details approved" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with approval", error: err.message });
        })
}

const createConference = async(req, res) => {
    if (req.body) {
        const conference = new conferenceDetails(req.body);
        conference.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Workshop statistics
const createWorkshop = async (req, res) => {
    if (req.body) {
        const workshop = new Workshop(req.body);
        workshop.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
// find by category
const getWorkshopsbyCategory = async(req, res) => {
    let cid = req.params.id;
    await Workshop.find({"Status":{$eq:cid}})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

//count by category
const countWorkshopsbyCategory = async(req, res) => {
    let cid = req.params.id;
    await Workshop.find({"Status":{$eq:cid}}).countDocuments()
        .then(data => {
            res.status(200).send({ tot: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}



//Research statistics
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
// find by category
const getResearchbyCategory = async(req, res) => {
    let cid = req.params.id;
    await Researcher.find({"status":{$eq:cid}})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

//count by category
const countResearchbyCategory = async(req, res) => {
    let cid = req.params.id;
    await Researcher.find({"status":{$eq:cid}}).countDocuments()
        .then(data => {
            res.status(200).send({ tot: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}


//revenue statistics 
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

const getTotPaid = async(req, res) => {
    let tot = 0;
    const payments = await Payment.find({}).countDocuments()
    console.log(payments)
    tot= payments*2000;
    console.log(tot)   
    res.status(200).send({ tot: tot });
        

}


module.exports = {
    createadministrator,
    getTotalAdministrators,
    getAllAdministrators,
    deleteAdministrators,
    updateAdministrator,
    getConferencedetails,
    updateConferencedetails,
    createConference,
    getWorkshopsbyCategory,
    countWorkshopsbyCategory,
    getResearchbyCategory,
    countResearchbyCategory,
    createWorkshop,
    Createpayment,
    CreateResearcher,
    getTotPaid

};