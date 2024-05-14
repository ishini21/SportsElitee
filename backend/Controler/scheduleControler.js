const Schedule = require("../Model/scheduleModel");

//display data
const getAllSchedules = async (req, res, next) => {

    let schedules; //variable

    try{
        schedules = await Schedule.find();
    }catch(err) {
        console.log(err);
    } // display all details in database

    if(!schedules){
        return res.status(404).json({message:"Schedule not found"});
    } //if not found

    //display all users
    return res.status(200).json({schedules});
};

//data insert
const addSchedules = async(req, res, next) => {

    const {venue,day,date,time,cname} = req.body;

    let schedules;

    try{
        schedules = new Schedule({venue,day,date,time,cname});
        await schedules.save();
    }catch (err) {
        console.log(err);
    }
    //not insert schedules
    if(!schedules){
        return res.status(404).send({message:"unable to add schedules"});
    }
    return res.status(200).json({schedules});

};

//get by id
const getById = async (req, res, next) => {

    const id = req.params.id;

    let schedule;

    try{
        schedule = await Schedule.findById(id);
    }catch (err) {
        console.log(err);
    }
    //not available schedules
    if(!schedule){
        return res.status(404).send({message:"Schedule not found"});
    }
    return res.status(200).json({schedule});
};

//update schedule
const updateSchedule = async (req, res, next) => {

    const id = req.params.id;

    const {venue,day,date,time,cname} = req.body;

    let schedules;

    try{
        schedules = await Schedule.findByIdAndUpdate(id, 
            {venue:venue,day:day,date:date,time:time,cname:cname});
            schedules = await schedules.save();
    }catch(err) {
        console.log(err);
    }
    if(!schedules){
        return res.status(404).send({message:"unable to update schedule details"});
    }
    return res.status(200).json({schedules});
};

//delete schedule
const deleteSchedule = async (req, res, next) => {

    const id = req.params.id;

    let schedule;

    try{
        schedule = await Schedule.findByIdAndDelete(id);
    }catch(err) {
        console.log(err);
    }
    if(!schedule){
        return res.status(404).send({message:"unable to delete schedule details"});
    }
    return res.status(200).json({schedule});
}



exports.getAllSchedules = getAllSchedules;
exports.addSchedules = addSchedules;
exports.getById = getById;
exports.updateSchedule = updateSchedule;
exports.deleteSchedule = deleteSchedule;

