const Product = require("../model/product.model");

exports.addNewUserPro = async (req,res) => {
   try{
    let product = await Product.findOne({pName : req.body.pName , isDelete: false});
    if(product){
    return res.status(400).json({message : "Product Already Exists"});
   }
   product = await Product.create(req.body);
   return res.status(201).json({message : "Product Added Successfully", product});
   }
   catch(err){
    console.log(err);
    res.status(500).json({message:"Internal Server Error"});
   }
};

exports.getAllUsersPro = async(req,res) => {
    try{
      let product = await Product.find({isDelete : false});
      res.status(200).json(product);
    }  catch(err) {
      console.log(err);
      res.status(500).json({message:"Internal Server Error"});
    }
};

exports.getUserPro = async(req,res) => {
    try {
      // let product = await Product.findOne({_id : req.query.productId});
      let product = await Product.findById(req.query.productId);
      if(!product){
         return res.status(404).json({message : "Product Not Found"});
      }
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json({message : "Internal Server Error"});
    }
};


exports.updateUserPro = async(req,res) => {
    try {
      let user = await Product.findById(req.query.productId);
      // console.log(product);
      if(!user){
        return res.status(404).json({message : "Product Not Found"});
      }
      // product = await Product.updateOne({_id : product._id}, req.body , {new : true});
      product = await Product.findOneAndUpdate(product._id, {$set: req.body} , {new : true});
    } catch (err) {
      console.log(err);
      res.status(500).json({message : "Internal Server Error"});
    }
};

exports.deleteUserPro = async(req,res) => {
    try {
      let product = await Product.findById({_id : req.query.productId , isDelete : false});
      console.log(product);
      if (!product) {
        return res.status(404).json({message : "Product not found"});
      }
      product = await Product.findByIdAndUpdate(product._id , {isDelete:true} , {new : true});
      res.status(200).json({message : "Product deleted successfully"});
    } catch (err) {
      console.log(err);
      res.status(500).json({message : "Internal Server Error"});
    }
};