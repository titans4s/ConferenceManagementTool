const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const conferenceAPI = require('./src/api/conferenceAPI')

const PORT = process.env.PORT || 9998;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success");
})

app.route('/').get((req, res) => {
    res.send('AF Finals');
});

app.use('/conferenced', conferenceAPI());

app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
});