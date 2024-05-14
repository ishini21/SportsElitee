const express = require("express");
const router = express.Router();

//insert Model
const Schedule = require("../Model/scheduleModel");


//insert userControler
const scheduleControler = require("../Controler/scheduleControler");

//create route path
router.get("/", scheduleControler.getAllSchedules);
router.post("/", scheduleControler.addSchedules);
router.get("/:id", scheduleControler.getById);
router.put("/:id", scheduleControler.updateSchedule);
router.delete("/:id", scheduleControler.deleteSchedule);

//export
module.exports = router;