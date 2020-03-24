var express = require('express');  
const mongodb = require("mongodb");
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Software_Eng:Test@cluster0-jgw2a.mongodb.net/Camp_Lincoln?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

const Schema = mongoose.Schema;


const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () {
	return this.toString();
};

//set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

//create the express.js object
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


var emptySchema = new Schema({});






mongodb.MongoClient.connect(url, (err, db) => {
  // connect to your specific collection (a.k.a database) that you specified at the end of your URI (/database)
  
  if(err){throw err;}
  console.log("Hi im connected");

  app.get("/hi", (req, res) => {
    res.send("Home sweet home 🏚")
  });
  
  // base route. Responds to POST requests to the root route
  app.post("/", (req, res) => {
    res.send("Sending it through the post 📬") 
  });
  
  // Responds to PUT requests to the root route
  app.put("/", (req, res) => {
    res.send("Don't you dare put me up to this.") // always responds with the string "TODO"
  });



});


// listen for requests on port 4567
const port = 3000;
var listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

