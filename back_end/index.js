
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dbUrl = "mongodb+srv://Software_Eng:test@cluster0-jgw2a.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(dbUrl, { useNewUrlParser: true },{ useUnifiedTopology: true });

let app = express();

const config = {
    name: 'sample-express-app',
    port: 8000,
    host: '0.0.0.0',
  };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(dbUrl ,{useMongoClient : true} ,(err) => {
    console.log('mongodb connected',err);
  })

client.connect(err => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db('Camp_Lincoln');

 
  client.close();
});

