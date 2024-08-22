const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pName : {
        type : String
    },
    pDescrip : {
        type : String
    },
    pRate : {
        type : Number
    },
    pWarranty : {
        type : Number
    },
    isDelete:{
        type:Boolean,
        default:false
    }
 },{
    versionKey:false,
    timestamps:true
 });


module.exports = mongoose.model('products', productSchema);