const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

const ResearcherApi = require('./src/api/ResearchApi');
const paymentApi = require('./src/api/paymentApi');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyparser.json());


const PORT = process.env.PORT || 9099;
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error', error.message);
    }
});


mongoose.connection.once('open', () => {
    console.log('Database synched');
});

app.route('/').get((req,res)=>{
    res.send('SLIIT AF FINAL API BY SE2020');
});

app.use('/research', ResearcherApi());
app.use('/payment',paymentApi());

app.listen(PORT,() => {
    console.log('Server is up and running on ' + PORT);
});
