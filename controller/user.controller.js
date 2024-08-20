// const users = require('../user.json')  //=>static 
const User = require('../model/user.model');
const { use } = require('../routes/user.routes');

exports.addNewUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    // console.log(user);
    if (user) {
      return res.status(400).json({ message: "User already exist..." })
    }
    user = await User.create(req.body)
    res.status(201).json({ user, message: "User Added Succeessfully..." })
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" })
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find({isDelete: false});
    res.status(200).json(users)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' })
  }
};

exports.getUser = async (req, res) => {
  try {
    let user = await User.findOne({ firstName: req.query.fristName })
    // let user =await User.findOne({_id: req.query.userId})
    // let user = await User.findById(req.query.userId)
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" })
    }
    res.status(200).json(user)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Intenal server Error" })
  }
};

exports.updateUser = async (req , res)=>{
  try {
    let user = await User.findByID(req.query.userID);
    if(!user){
      return res.status(404).json({message: "User Not Found..."})
    }
    // user = await User.updateOne({_id:user._id} , req.body , {new: true});
    // user = await User.findOneAndUpdate({_id:user._id} , req.body , {new:true});
    user = await User.findByIDAndUpdte(user._id, {$set: req.body}, {new: true});
    res.status(200).json({user , message:'User update success'});
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Internal Server Error..."})
  }
};

exports.deleteUser = async (req , res)=>{
  try {
    let user = await User.findOne({_id:req.query.userId, isDelete: false});
    // console.log(user);
    if(!user){
      return res.status(404).json({message: "User Not Found..."})
    }
    
    user = await User.findByIDAndUpdte(user._id, {isDelete:true}, {new:true});
    res.status(200).json({user , message:'user Delete success'});
  } catch (err) {
    console.log(err);
    res.status(500).json({message : "Internal Server Error..."})
  }
};