require('dotenv').config();
const users = require('./api');

const express = require("express");
 const app = express();

 app.use(express.json());

 app.get("/", (req, res) =>{

    res.status(200).json(users);
 });

 app.post("/user", (req, res) =>{
   const createUser = req.body;
     const newUser = users.push(createUser);
      res.status(200).json({message:"Create user successfully", createUser});

   
 })



 const port =process.env.port;
 app.listen(port,()=>{
    console.log("The server is renung port ", port);
 })