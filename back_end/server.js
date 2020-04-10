var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;
const cors = require('cors');


var str = "";

const url = "mongodb+srv://Software_Eng:Test@cluster0-jgw2a.mongodb.net/Camp_Lincoln?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//example Post Request for reference

app.get('/', async  (req, res) => {
    MongoClient.connect(url,function(err, client) { 
      if(!err){
        console.log("we are connected");
      }
      var db = client.db('Camp_Lincoln');
      var returnstring = "";

      db.collection('Activity').findOne({}, function(err,docs){
        // Print the documents returned
          
          res.send(docs);
        // Close the DB
        client.close();
      });

    });
  });
  


app.listen(3001, function() {}); 
module.exports = app;