const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    venue:{
        type:String, //dataType
        required:true, //validate
    },
    day:{
        type:String, 
        required:true, 
    },
    date:{
        type:String, 
        required:true, 
    },
    time:{
        type:String, 
        required:true, 
    },
    cname:{
        type:String, 
        required:true, 
    }

});

module.exports = mongoose.model(
    "scheduleModel", //file name
    scheduleSchema //function name
)