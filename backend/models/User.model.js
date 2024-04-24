const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    UserName: { type:String, required: true },
    email: { type:String, required: true },
    mobileNumber: { type: Number, required: true },
    password: { type: String, required: true },
    imgUrl: { type: String, required: true },
    address: { type: String, required: true },   
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;