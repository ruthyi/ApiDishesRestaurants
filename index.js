require('dotenv').config();
const express = require('express');
const cors= require('cors');
const {dbConnect}= require("./config/mongo")
const app= express()
const port= process.env.PORT || 3000

app.use(cors());
app.use(express.json());

// req trae del usuario
// res reponde al usuario
dbConnect()
app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
