const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserId:{
        type:String,
        required:true,
    },

    Email:{
        type:String,
        required:true,
    },

    Date:{
        type: Date,
        required: true,
    },

    Feedback:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model(
    "Feedback",
    userSchema
)