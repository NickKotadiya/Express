const express = require("express");
const app = express();
const morgan = require("morgan");
const users = require("./friend.json");
console.log(users);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.get("/" , (req,res)=>{
     res.send(" Welcome To Express Server");
});
// CRUD
// Creat User
     app.post("/users",(req,res)=>{
     console.log(req.body);
     users.push(req.body);
     res.json({message: "User Added Success"});
     });
     // Read User  - Get All Users
     app.get("/user",req,res=>{
          res.json(users);
     });
     // Get Single User
     app.get("/user/:id",(req,res)=>{
          let id = +req.params.id;
          let item = users.find((user)=>user.id === id)
          res.json(item);
     });

     app.listen(2024,()=>{
          console.log("Server Start at http://localhost:2024");
     });