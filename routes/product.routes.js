const express = require('express');
const productRoutes = express.Router();

const {
    addNewUserPro,
    getAllUsersPro,
    getUserPro,
    updateUserPro,
    deleteUserPro
} = require('../controller/product.controller');

productRoutes.post('/' , addNewUserPro);

productRoutes.get('/' , getAllUsersPro);

productRoutes.get('/productget',getUserPro);

productRoutes.patch("/:id" , updateUserPro);

productRoutes.delete("/:id" , deleteUserPro);

module.exports = productRoutes;