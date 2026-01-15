//import dotenv
require("dotenv").config()

//1.import express
const express=require("express")

//5.import cors
const cors=require("cors")

//8.import routes
const routes=require("./router")

//import Connection
require("./connection")

//2.create server
const eventServer=express()

//6.use cors to connect with frontend
eventServer.use(cors())

//7.parse the json data
eventServer.use(express.json())
// patientServer.use(express.urlencoded({ extended: true }));

//9.tell server to use router

eventServer.use(routes)



//3.set port
const PORT =5000|| process.env.PORT

//4.listen
eventServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at the port ${PORT}`);
    
})
