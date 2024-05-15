const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel=require('./models/Users')
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/signature")
app.listen(3001,()=>{
    console.log("Server is running")
})



app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/getUser/:id',(req,res)=>{
    const id =req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        gameName: req.body.gameName,  // Updated field
        seat: req.body.seat,          // Updated field
        date: req.body.date,          // Updated field
        cardNumber: req.body.cardNumber,
        cvv: req.body.cvv,            // New field
        expiredDate: req.body.expiredDate // New field
    }, { new: true }) // { new: true } ensures you get the updated document back
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id',(req,res)=> {
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(res))
    .catch(err=>res.json(err))
})



app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err => res.json(err))

})

// Search endpoint
app.get('/search', (req, res) => {
  const query = req.query.query; // Get search query from request query params
  UserModel.find({
    $or: [
      { name: { $regex: query, $options: 'i' } }, // Case-insensitive search in name field
      { email: { $regex: query, $options: 'i' } }, // Case-insensitive search in email field
      { gameName: { $regex: query, $options: 'i' } } // Case-insensitive search in email field

    ]
  })
  .then(users => res.json(users))
  .catch(err => res.status(500).json({ error: err.message }));
});
