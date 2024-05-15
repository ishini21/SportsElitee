const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    gameName:String,       // Updated field
    seat: Number,           // Updated field
    date: Date,             // Updated field as Date type
    cardNumber: {
        type: Number,
        required: true,
        unique: true,
      
    },     
    cvv: Number,            // New field
    expiredDate:Date     // New field
});

const UserModel = mongoose.model("users", UserSchema);  // users - name of the collection
module.exports = UserModel;
