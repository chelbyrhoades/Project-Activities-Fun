var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(bodyParser.json());
//MONGO STUFF
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uri = "mongodb+srv://Software_Eng:Test@cluster0-jgw2a.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const client = new MongoClient(uri);

client.connect();

async function main(){
try{
	await client.connect();

	//await listDatabases(client);
	//await connecti(client);
	//this is an area where I'm able to test functionality of different 


  //databaseOne = await client.db().admin().listCollections();
//databaseOne.databases.forEach(db => console.log(` - ${db.name}`));
} catch(e){
	console.error(e);
} finally {
	await client.close();
}
}
main().catch(console.error);
//function that prints out the databases
async function listDatabases(client, res){
	db = client.db().admin()
	databasesList = await db.listDatabases();
  var dbl = client.db("Camp_Lincoln")

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    console.log(databasesList.databases[0]); //this is the admin database

 //   dbl.collection('Activity').find( { activityName: { $elemMatch: [ "Archery"] } }, (err, user) =>{
   //   if(!user) {console.log("cound not find activity")}
  //    else {console.log(user)}
   // } )

    /*
    console.log('collections:');
    dbl.listCollections();
    console.log('done');
    //insert into the adminUser Database
    dbl.collection("adminUser").insertOne({userName: "admin2", userPassword: "pass234"});
*/
    

};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/******LOGIN******/

//new user logs in
app.post("/login/newUser", (req, res) => {
  var user = req.body.userName;
  var pass = req.body.passWord;
	db = client.db().admin()
  var dbl = client.db("Camp_Lincoln")

    //insert into the adminUser Database
    dbl.collection("adminUser").insertOne({userName: user, userPassword: pass});
    db.close();
});

//ADMIN USER SIGN IN
app.post("/login/signin", (req, res) => {
  var user = req.body.userName;
  var pass = req.body.passWord;
  db = client.db().admin()
  var dbl = client.db("Camp_Lincoln")
  dbl.collection('adminUser').findOne({'userName': user, 'userPassword': pass}, (err, user)=> {
    if(!user) res.json({message: 'Login failed. User not found.'})
  })
    //logged in!
  
    db.close();
});


/****PUT ONE CHILD IN THE DATABASE****/
app.post("/camper/addOne", (req, res) => {
  var cId = req.body.camperId;
  var nick = req.body.nickname;
  var first = req.body.firstnName;
  var lastName = req.body.lastName;
  var OB = req.body.OBnum;
  var a = req.body.age;
  var preff = req.body.pref1;
  var prefs = req.body.pref2;
  var preft = req.body.pref3;
  db = client.db().admin()
  var dbl = client.db("Camp_Lincoln")
  dbl.collection("Camper").insertOne({'camperId': cId, 'nickname': nick, 'firstnName': first, 'lastName': last, 'OBnum': OB, 'age': a, 'pref1': preff, 'pref2': prefs, 'pref3': preft});
  db.close();
  });


/****GET A CHILD FROM THE DATABASE****/
app.get("/camper/find", (req, res) => {
  db = client.db().admin()
  var fname = req.body.fname;
  var dbl = client.db("Camp_Lincoln")
dbl.collection('Camper').findOne({'firstnName': fname}, (err, user)=> {
    if(!user) res.json({message: 'Camper not found.'})
  })
 
    db.close();
});

/****GET STAFF FROM THE DATABASE****/

/****ADD STAFF IN THE DATABASE****/

/****READ CSV FILE AND PUT INTO DATABASE****/
app.post("/csv", (req, res) => {
  file = req.body.csv;
  db = client.db().admin()
  fs.readFile(file, async (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(await neatCsv(data))

  var dbl = client.db("Camp_Lincoln")
  //if file == {
  if (file == 'activity_list.csv'){
    dbl.collection('Activity').insert(data)
  }

  
  if (file == 'camper_list.csv'){
    dbl.collection('Camper').insert(data)
  }
  if (file == 'counselor_list.csv'){
    dbl.collection('Staff').insert(data)
  }

  //}
  
  //putting in database:
})

});



/**** GET STAFF DOING ACTIVITIES ****/

/**** ADD A KID DOING ACTIVITY ****/


/**** GET ACTIVITIES FROM DATABASE ****/
app.get("/activity/getActivity", (req, res) => {

  db = client.db().admin()
  var aName = req.body.activityName;
  var dbl = client.db("Camp_Lincoln")

    dbl.collection('Activity').find({ activityName: { $elemMatch: [aName] }} , (err, user)=> {
    if(!user) {console.log("Activity not found.")}
  })
 
    db.close();
});

//returns a list of kids doing the activity


module.exports = app;
