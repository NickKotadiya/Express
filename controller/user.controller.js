// npm i bcrypt for password to hide in hash
const User = require('../model/user.model');
const bcrypt = require('bcrypt');

exports.registerUser = async (req , res) =>{
  try {
    let user = await User.findOne({ email: req.body.email , isDelete: false });
    if(user){
      return res.json({ message: 'User alredy exist.....' });
    }
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    user = await User.create({...req.body , password: hashPassword});
    res.status(201).json({ user, message:'Register Success......' })
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' })
  }
};

exports.loginUser = async (req , res) =>{
  try {
    let user = await User.findOne({ email: req.body.email , isDelete: false });
    if(!user){
      return res.json({ message: 'User not found.....' });
    }
    let comparedPassword = await bcrypt.compare(req.body.password , user.password);
    if(!comparedPassword){
      return res.json({ message: 'Email or Password does not matched.......' })
    }
    res.status(200).json({ message: 'Login Success......' , user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

