const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ActivitySchema = new Schema(
  {
    id: Number,
    camperid: String,
    ageLimit: String,
    sizeLimit: String,
    banList: String,
    activityPeriod: String
  },
  { timestamps: false }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Activity", ActivitySchema);