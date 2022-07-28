require('dotenv').config();

const express = require("express");
 const app = express();

 app.use(express.json());

 app.get("/", (req, res) =>{
    res.status(200).json("I am expresJeson mehrab");
 })

 const port =process.env.port;
 app.listen(port,()=>{
    console.log("The server is renung port ", port);
 })