
const express =require("express");
const mongoose =require("mongoose");
const router=require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);

    

mongoose.connect("mongodb+srv://chanithtranchal:chanith@cluster0.kpvenrw.mongodb.net/")
.then(()=>console.log("Connect to mongoDB"))
.then(()=>{
    app.listen(4000);
})
.catch((err)=>console.log((err)));