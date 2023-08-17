const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

//get data into json format
app.use(express.json());

//connect to server
const PORT = process.env.PORT || 5500;




//listen to server connections
app.listen(PORT, ()=> console.log('server connected'));
