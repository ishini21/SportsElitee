const User = require("../Model/UserModel");

const getAllUsers = async(req,res,next) =>{
    let users;

    //get all users
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

    //not found
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    //Display all users
    return res.status(200).json({users});
};

// data insert
const addUsers = async(req,res,next)=>{

    const {uname, status, session,sport, date, time } = req.body;


    let users;
    try{
        users = new User({ uname, status, session,sport, date, time});
        await users.save();
    }catch(err){
        console.log(err);
    }

    // not insert users
    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({users});

}
//get by id
const getById =async(req,res,next)=>{
    const id = req.params.id;

    let user;

    try{
       user =await User.findById(id); 
    }catch(err){
        console.log(err);
    }
    //not available users
    if(!user){
        return res.status(404).json({message:"User not found"});   
    }
    return res.status(200).json({user});

}

//update user details
const updateUser = async(req,res,next) =>{
    const id=req.params.id;
    const {uname, status, session,sport, date, time } = req.body;

    let users;
    try{
        users=await User.findByIdAndUpdate(id,{uname:uname,status:status,session:session,sport:sport,date:date,time:time});
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"Unable to update user details"});   
    }
    return res.status(200).json({users});
};

//Delete user details
const deleteUser =async(req,res,next)=>{
    const id=req.params.id;

    let users;

    try {
        users= await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"Unable to delete user details"});   
    }
    return res.status(200).json({users});
}



exports.getAllUsers =getAllUsers;
exports.addUsers = addUsers;
exports.getById =getById;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;