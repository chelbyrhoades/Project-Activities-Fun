const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const loginSchema = new mongoose.Schema({
    userName: String,
    passWord: String

});

module.exports = mongoose.model("login",loginSchema);