const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

//get data into json format
app.use(express.json());

//connect to server
const PORT = process.env.PORT || 5500;

//cors
app.use(cors());


//routes 
const TodoItemRoute = require('./routes/todoItems');

//connect to mongo
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log('Database Connected'))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);


//listen to server connections
app.listen(PORT, ()=> console.log('server connected'));
