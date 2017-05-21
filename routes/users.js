"use strict";

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
//Routes 
router.post('/register',(req,res,next)=>{
	let newUser = new User({
		name : req.body.name,
		email : req.body.email,
		username : req.body.username,
		password : req.body.password
	});
	User.addUser(newUser,(err,user)=>{
		if(err){
			res.json({success:false, msg:'Failed to register you'});
		}
		else{
			res.json({success:true,msg:"User registered"});
		}
	})
});

//Login
router.get('/login',(req,res,next)=>{
	res.send("You are on login page");
});

//profile
router.get('/profile',(req,res,next)=>{
	res.send("You are on the profile page");
});

module.exports = router;