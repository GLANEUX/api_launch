const express = require('express')
const app = express()
const port = 3000
const host ='0.0.0.0';

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/api_launch');

app.use(express.urlencoded());
app.use(express.json());


const launchRoute = require('./routes/launchRoute');
app.use('/launches', launchRoute);


app.listen(port,host);