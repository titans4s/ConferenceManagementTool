const express = require('express');
const mongoose = require('mongoose');
const bodypaeser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8078;

app.use(cors());
app.use(bodypaeser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("Mongodb connection success!");
});

const userRouter = require("./routes/users.js")

app.use("/user",userRouter)

app.listen(PORT, () => {
    console.log('Server is up and running on port number ${PORT}');
})