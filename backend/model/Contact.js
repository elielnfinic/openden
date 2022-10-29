const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const Contact = new mongoose.Schema({
    email : {
        type : String, 
        required : "Email address is required",
        minlength : 2,
        maxlength : 200
    }
});
  
module.exports = mongoose.model("Contact", Contact);  