const express=require("express")
const userController = require("./Controller/userController")
const eventController = require("./Controller/eventController")

//create router class - create instance
const routes=new express.Router()
//set path to user register
// routes.post("/register",userController.registerController)

// //set path to user login
// // routes.post("/login",userController.loginController)
// routes.post("/login",userController.loginController)
routes.post("/register", userController.registerController);
routes.post("/login", userController.loginController);

routes.post("/add-event",eventController.addEventController);

routes.get("/get-event",eventController.getEventController);


routes.delete("/delete-event/:id",eventController.deleteEventController);

//export
module.exports=routes