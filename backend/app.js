//pass = MpHf8t8Ja3GGvMb0

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/scheduleRoute");


const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/schedules",router);


mongoose.connect("mongodb+srv://gimsha12:MpHf8t8Ja3GGvMb0@cluster0.3ihxbic.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));