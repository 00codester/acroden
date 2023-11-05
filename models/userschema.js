//import mongoose from "mongoose";
const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  items4Sale: {
    type: Array
  }
});
 
const userModel = mongoose.model("User", userSchema);
module.exports = {
    userModel
};