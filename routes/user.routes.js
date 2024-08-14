const express = require('express');
const userRoutes = express.Router();
const {
     addNewUser,
     getAllUser,
     getUser,
     replaceUser,
     updateUser,
     deleteUser
} = require("../controller/user.controller")

userRoutes.post("/",addNewUser);

// userRoutes.get("/",getAllUser);

// userRoutes.get("/:id", getUser);

// userRoutes.put("/:id",replaceUser);

// userRoutes.patch("/:id" ,updateUser);

// userRoutes.delete("/:id",deleteUser);

module.exports = userRoutes;