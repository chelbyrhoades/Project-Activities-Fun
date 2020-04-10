const mongoose = require("mongoose");

const url = "mongodb+srv://Software_Eng:Test@cluster0-jgw2a.mongodb.net/Camp_Lincoln?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = InitiateMongoServer;