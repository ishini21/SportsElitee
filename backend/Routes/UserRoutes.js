const express = require  ("express");
const router = express.Router();

const User = require("../Model/UserModel");
const UserController = require("../Controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addFeedbacks);
router.get("/:id",UserController.getByid);
router.put("/:id",UserController.updateFeedback);
router.delete("/:id",UserController.deleteFeedback);


module.exports = router;
