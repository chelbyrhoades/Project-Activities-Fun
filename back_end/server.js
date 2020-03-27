var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
var str = "";

const url = "mongodb+srv://Software_Eng:Test@cluster0-jgw2a.mongodb.net/Camp_Lincoln?retryWrites=true&w=majority";


//example Post Request for reference
/*
app.get('/',  (req, res) => {
    MongoClient.connect(url,function(err, client) { 
      if(!err) {
        console.log("We are connected");

      }

      var db = client.db('Camp_Lincoln');


      db.collection('Activity').find({}).toArray(function(err, docs) {
        // Print the documents returned

        docs.forEach(function(doc) {
          console.log(doc.camperid);
        });
        // Close the DB
        client.close();
    });
    });
    res.status(200).send("Success");

  });
  */



var server = app.listen(3001, function() {}); 