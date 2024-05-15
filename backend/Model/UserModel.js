const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    uname: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    session: {
        type: Number,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String, // Assuming you only need the time part without date
        required: true,
    },
    
});

module.exports = mongoose.model(
    "UserModel", // Model name
    userSchema // Schema to use
);