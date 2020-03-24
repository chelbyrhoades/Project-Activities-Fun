var express = require('express');

var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const API_PORT = 3001;
const Data = require('./data');

const app = express();
app.use(cors());
const router = express.Router();

const url = "mongodb+srv://Software_Eng:Test@cluster0-jgw2a.mongodb.net/Camp_Lincoln?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));



