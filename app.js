const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport  = require("passport");
const mongoose = require("mongoose");

const users = require('./routes/users');
const app = express();
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on("connected",()=>{
	console.log("connected to database");
});

mongoose.connection.on("error",(err)=>{
	console.log("Their is an error");
});

/*
	cors is used to allow or block access from any domain
	Study about this more and get acquainted
*/

app.use(cors());

// Middleware bodyParser
app.use(bodyParser.json());

//passport 
app.use(passport.initialize());
app.use(passport.session());

//set static foler. this is used to store angular js files for storing frontend
app.use(express.static(path.join(__dirname,'public')));

// using the express router to separate url for different users
app.use('/users',users);

const port = 3000;

app.listen(port, ()=>{
	console.log("Server is listening on port "+port);
});

app.get('/', (req,res)=>{
	res.send("Invalid Input");
});