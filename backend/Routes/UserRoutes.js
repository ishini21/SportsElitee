const express=require("express");
const router =express.Router();
//Insert model
const User =require("../Model/UserModel");
//Insert User Controller
const UserController =require("../Controlers/UserControllers");


router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);


//export
module.exports=router;