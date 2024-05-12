const User = require ("../Model/UserModel");

//Data Display
const getAllUsers = async (req, res, next) => {
    let Users;

    try {
        users = await User.find();        
    } catch (err) {
        console.log(err); 
    }

    if(!users){
        return res.status(404).json({message:"User not found"});
    }

    return res.status(200).json({users});
};

//Data Insert
const addFeedbacks= async(req, res, next) => {
    
    const {UserId,Email,Date,Feedback} = req.body;

    let users;
    
    //Insert
    try {
        users = new  User ({UserId,Email,Date,Feedback});
        await users.save();
    } catch (err) {
        console.log(err);
    }
    //not Insert
    if(!users){
        return res.status(404).json({message:"unable to add Feedback"});
    }
    return res.status(200).send({users});
};

//Get details by id
const getByid = async(req,res,next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    //user not available
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).send({user});
};

//Update user details
const updateFeedback = async (req,res,next) => {
    const id = req.params.id;
    const {UserId,Email,Date,Feedback} = req.body;

    let users;

    try {
        users =  await User.findByIdAndUpdate(id,
        {Email: Email,Feedback: Feedback});
        users = await users.save();
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"Unable to update user details"});
    }
    return res.status(200).send({users});
};

//Delete Feedback
const deleteFeedback = async (req, res, next) => {
    const id = req.params.id;

    let user ;

    try {
        user = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"Unable to Delete user details"});
    }
    return res.status(200).send({user});
}

exports.getAllUsers = getAllUsers;
exports.addFeedbacks = addFeedbacks;
exports.getByid = getByid;
exports.updateFeedback = updateFeedback;
exports.deleteFeedback = deleteFeedback;



