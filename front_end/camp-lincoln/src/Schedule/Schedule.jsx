import React from "react";
import NavBar from '../Navbar/navbar';
import {Table, TableBody,TableCell, TableHead, TableRow, Button, Container, Grid, ButtonGroup} from '@material-ui/core';
//import ReactTable from "react-table";

//import SimpleListMenu from '../menu/SimpleMenuListMenu';
import ReactDOM from 'react-dom'
import './Schedule.css'
//function schedual();
class Activity{

  constructor(id,name, period, staffnum, maxcampnum, mincampnum,teachingstaff,assist,cantdo,cpas){
    //Name is the General Activity Name
    this.Name=name;
    //ID is the Activity Catagory Name (unique activity names like sailing extravaganza are called sailing) and its period number ie sailing1
    this.ID=id;
    //activity period
    this.Period=period;
    //Base number of staff required
    this.RequiredStaffBase=staffnum;
    //campers per additional staff member
    this.CPAS=cpas;
    this.StaffNum=0;

    this.MaxCamperNum=maxcampnum;
    //this.MinCampNum=mincampnum;
    this.CurCampNum=0;
    this.Roster=[];
    //AD/AS
    this.Teachers=teachingstaff;
    //general counselors able to help out
    this.Assist=assist;
    //people who cant do the activity
    this.Cant=cantdo;
    //curent staff list
    this.Staff=[];


  }


}
let Archery1= new Activity("Archery1", "Archery",1,1,5,3,["William Dunn"],["William Dunn"],["Jack Dunn"],10);
let Riding1= new Activity("Riding1", "Riding",1,1,5,3,["Jack Dunn"],["Jack Dunn"],["Nick Dunn"],10);
let Rifelry1=new Activity("Rifelry1", "Rifelry",1,1,5,3,["Nick Dunn"],["Nick Dunn"],["Jack Dunn"], 10);
let Archery2= new Activity("Archery2", "Archery",1,1,5,3,["William Dunn"],["William Dunn"],["Jack Dunn"],10);
let Riding2= new Activity("Riding2", "Riding",1,1,5,3,["Jack Dunn"],["Jack Dunn"],["Nick Dunn"],10);
let Rifelry2=new Activity("Rifelry2", "Rifelry",1,1,5,3,["Nick Dunn"],["Nick Dunn"],["Jack Dunn"], 10);
let Archery3= new Activity("Archery3", "Archery",1,1,5,3,["William Dunn"],["William Dunn"],["Jack Dunn"],10);
let Riding3= new Activity("Riding3", "Riding",1,1,5,3,["Jack Dunn"],["Jack Dunn"],["Nick Dunn"],10);
let Rifelry3=new Activity("Rifelry3", "Rifelry",1,1,5,3,["Nick Dunn"],["Nick Dunn"],["Jack Dunn"], 10);
let Archery4= new Activity("Archery4", "Archery",1,1,5,3,["William Dunn"],["William Dunn"],["Jack Dunn"],10);
let Riding4= new Activity("Riding4", "Riding",1,1,5,3,["Jack Dunn"],["Jack Dunn"],["Nick Dunn"],10);
let Rifelry4=new Activity("Rifelry4", "Rifelry",1,1,5,3,["Nick Dunn"],["Nick Dunn"],["Jack Dunn"], 10);
let Archery5= new Activity("Archery5", "Archery",1,1,5,3,["William Dunn"],["William Dunn"],["Jack Dunn"],10);
let Riding5= new Activity("Riding5", "Riding",1,1,5,3,["Jack Dunn"],["Jack Dunn"],["Nick Dunn"],10);
let Rifelry5=new Activity("Rifelry5", "Rifelry",1,1,5,3,["Nick Dunn"],["Nick Dunn"],["Jack Dunn"], 10);
var activites=[[Archery1,Riding1,Rifelry1],[Riding2,Archery2,Rifelry2],[Archery3,Riding3,Rifelry3],[Riding4,Archery4,Rifelry4],[Archery5,Riding5,Rifelry5]];
//Counselor
class Counselor{
  constructor(name, cabin,tog ) {
    this.Name=name;
    this.Cabin=cabin;
    this.timeOffGroup=tog;
    this.A1="none";
    this.A2="none";
    this.A3="none";
    this.A4="none";
    this.A5="none";


  }
}

let C1= new Counselor("William Dunn","Gopher",2);
let C2= new Counselor("Jack Dunn","Gopher",2);
let C3= new Counselor("Nick Dunn","Gopher",2);
let Counselors=[C1,C2,C3];
//Activity Assignment Functions Camper Needs to run first
function counselorActivityAssingment(counselors,acts) {
  var groupOff=0;
      //prompt("What group has Time off");

  //fix this make it take into account time off
  //this is incredibly inneficent
  var p;//period
  for (p = 0; p < 5; p++) {
    var a;//activity
    for (a = 0; a < activites[p].length; a++) {
      //update required staff numbers;
      activites[p][a].StaffNum = activites[p][a].RequiredStaffBase + (activites[p][a].CurCampNum * activites[p][a].CPAS);
      //alert("here");
      var c;//counselor
      for (c = 0; c < Counselors.length; c++) {
        //assign counselors to activities based on the number needed and the activities canTeach canAssist CantDo
        var A;
        // AD/AS assignment
        for (A = 0; A < activites[p][a].Teachers.length; A++) {
          if (Counselors[c].Name == activites[p][a].Teachers[A]) {
            activites[p][a].Staff.push(Counselors[c]);
            if(Counselors[c].timeOffGroup=groupOff){
              activites[p][a].StaffNum++;
            }
            //       alert(activites[p][a].Name+" "+Counselors[c].Name);
            if (p == 0) {
              Counselors[c].A1 = activites[p][a];
            }
            if (p == 1) {
              Counselors[c].A2 = activites[p][a];
            }
            if (p == 2) {
              Counselors[c].A3 = activites[p][a];
            }
            if (p == 3) {
              Counselors[c].A4 = activites[p][a];
            }
            if (p == 4) {
              Counselors[c].A5 = activites[p][a];
            }
          }
        }
      }
    }

    for (a = 0; a < activites[p].length; a++) {
   
      var c;
      for (c = 0; c < Counselors.length; c++) {
        //assign counselors to activities based on the number needed and the activities canTeach canAssist CantDo
        var A;
      
        for (A = 0; A < activites[p][a].Assist.length; A++) {
          if (activites[p][a].Staff.length < activites[p][a].StaffNum) {

            if (Counselors[c].Name == activites[p][a].Assist[A]) {
              if(Counselors[c].timeOffGroup=groupOff){
                //this is not the best way to do this but it will work for now
                activites[p][a].StaffNum++;
              }
              activites[p][a].Staff.push(Counselors[c]);
              //       alert(activites[p][a].Name+" "+Counselors[c].Name);
              if (p == 0) {
                Counselors[c].A1 = activites[p][a];
              }
              if (p == 1) {
                Counselors[c].A2 = activites[p][a];
              }
              if (p == 2) {
                Counselors[c].A3 = activites[p][a];
              }
              if (p == 3) {
                Counselors[c].A4 = activites[p][a];
              }
              if (p == 4) {
                Counselors[c].A5 = activites[p][a];
              }
            }
          }
        }
      }
    }
  }//end of period for loop

}


function camperActivityAssingment(Camper, acts, period){

  //loop through the three prefrences for an activity period and place them in an activity that is in that list that has space for them
  var i;
  //todo add in a update to counselor
  var prefrences=[];
  //Campers Prefrences Are inputed in the prompt menu
  //while(true) {
    for (i = 1; i < 4; i++) {
      //prefrences.push(prompt(Camper.ID + " Period " + period + " prefrence " + i + ": "));
      prefrences.push("Archery");
    }

    for (i = 0; i < 3; i++) {

      var j;

      for (j = 0; j < acts[period - 1].length; j++) {

        if (prefrences[i] == acts[period - 1][j].Name) {
          if (acts[period - 1][j].CurCampNum < acts[period - 1][j].MaxCamperNum) {
            //var temp;
            // add camper to the roster of the activity
            acts[period - 1][j].Roster.push(Camper);
            //alert(Camper.fName);
            acts[period - 1][j].CurCampNum = acts[period - 1][j].Roster.length;
            // return the activity
            //alert(acts[period-1][j].Name+" "+acts[period-1][j].Roster.length);
            return acts[period - 1][j];
          }
        }
      }

    }
    //alert("All Choices full please enter new options.");
  //}

  //}

}
let N=0;
class Camper{
  constructor(id, Nname, Lname,Fname,number) {
    this.ID=id;


    this.nName=Nname;
    this.lName=Lname;
    this.fName=Fname;
    this.Num=N;
    N++;
    this.A1='na';
    this.A2='na';
    this.A3='na';
    this.A4='na';
    this.A5='na';//camperActivityAssingment(this,activites,5);
  }

}
let rs=[];
//Test Data
var c1= new Camper("01-01","Tom","Dunn","Tommy",0);
var c2= new Camper("01-02","Nick","Dunn","Nicky",1);
var c3= new Camper("01-03","Pete","Dunn","Peter",2);
//var c4= new Camper("01-04","Will","Dunn","William",3);
//var c5= new Camper("01-05","Jack","Dunn","Jack",4);
let CList=[];
function createStaffList(Name,P1,P2,P3,P4,P5){
  return{Name,P1,P2,P3,P4,P5};
}
function createroster(Identity,nN,lN,fN){
  return{Identity,nN,lN,fN};
}
function staffList(){
  var i;
  CList=[];
  for(i=0;i<Counselors.length;i++){
    CList.push(createStaffList(Counselors[i].Name,Counselors[i].A1.Name,Counselors[i].A2.Name,Counselors[i].A3.Name,Counselors[i].A4.Name,Counselors[i].A5.Name));
  }
  ReactDOM.render(
  <Table>
    <TableRow><tb ><Button onClick={schedual}>Back to Schedual</Button></tb></TableRow>
    <TableRow><TableHead>Name</TableHead><TableHead>Activity 1</TableHead><TableHead>Activity 2</TableHead><TableHead>Activity 3</TableHead><TableHead>Activity 4</TableHead><TableHead>Activity 5</TableHead></TableRow>
    {CList.map(row => (
        <TableRow key={row.id}>
          <TableCell>{row.Name}</TableCell>
          <TableCell>{row.P1}</TableCell>
          <TableCell>{row.P2}</TableCell>
          <TableCell>{row.P3}</TableCell>
          <TableCell>{row.P4}</TableCell>
          <TableCell>{row.P5}</TableCell>

        </TableRow>
    ))}
  </Table>,document.getElementById('root'));
}
//Activity Roster
function roster(act){
  //alert("running");
  var i;
  rs=[];
  for(i=0;i<act.Roster.length;i++){
    rs.push(createroster(act.Roster[i].ID,act.Roster[i].nName,act.Roster[i].lName,act.Roster[i].fName));
  }

  ReactDOM.render(
  <Table>
    <TableRow><tb ><button onClick={schedual}>Back to Schedual</button></tb></TableRow>
    <TableRow><th>OB #</th><th>Nickname</th><th>Last Name</th><th>First</th></TableRow>
    {rs.map(row => (
        <TableRow key={row.id}>
          <TableCell>{row.Identity}</TableCell>
          <TableCell>{row.nN}</TableCell>
          <TableCell>{row.lN}</TableCell>
          <TableCell>{row.fN}</TableCell>

        </TableRow>
    ))}
  </Table>,document.getElementById('root'));
}

function showSchedual(c){
  //alert("runs");
  let br=React.createElement('br');
  let br1=React.createElement('br');
  //alert(c.nName);

  // eslint-disable-next-line no-undef

  ReactDOM.render([<button onClick={schedual}>Back to Schedual</button>,<p>Name: {+" "+c.lName} </p>,
    <p>ID: {c.ID}</p>, <table><tr><th>Period 1</th><th>Period 2</th><th>Period 3</th><th>Period 4</th><th>Period 5</th></tr>
      <tr><td>{c.A1.Name}</td><td>{c.A2.Name}</td><td>{c.A3.Name}</td><td>{c.A4.Name}</td><td>{c.A5.Name}</td></tr>
    </table>],document.getElementById('root'));
  // return (<p>Name</p>);

}
let campers=[c1,c2,c3/*,c4,c5*/];
let row1= [];
let row2= [];
let row3= [];
let row4= [];
let row5= [];


function makeButton(camp, campers){

  var x =camp.Num;
  //alert('x: '+campers[x].nName);
  let t= React.createElement("text",null,camp.nName);
  let but=React.createElement("p",{ onClick:()=>showSchedual(campers[x])}, [camp.nName]);

  return but;

  // but.innerHTML=element1[key1][i].nName;





}

function btner(act){
  //alert("Runs");
  return React.createElement("button",{  onClick:()=>roster(act)},[act.Name+": "+act.Roster.length+" | "+act.MaxCamperNum]);
}
//let Table=<table id="table"> </table>;
function generateTable() {



  var i;
  var j;

  for(i=0;i<activites.length;i++){

    for(j=0;j<activites[i].length;j++){

      var name=React.createElement('text',null,activites[i][j].Name);
      var curN=React.createElement('text',null,activites[i][j].CurCampNum);
      var maxN=React.createElement('text',null,activites[i][j].MaxCamperNum);
     // activites[i][j].ID=j;
      //activites[i][j].Period=i;
      var btn = btner(activites[i][j]);

      var d;
      let chils=[];
      for (d=0;d<activites[i][j].Roster.length;d++){
        //alert("name");
        // eslint-disable-next-line no-undef
        // alert(activites[i][j].Roster[d].fName);
        chils.push(makeButton(activites[i][j].Roster[d],campers)); //this line does not work
        //chils.push(d);
      }
      let div2 = React.createElement('div',{className:'dropdown-content'},[chils]);
      let div1 = React.createElement('div',{className:'dropdown'},[btn,div2]);
      // div1.appendChild(btn);
      //div1.appendChild(div2);
      if(i==0){
        row1.push(div1);}
      if(i==1){
        row2.push(div1);}
      if(i==2){
        row3.push(div1);}
      if(i==3){
        //row4.push(activites[i][j].Name);
        row4.push(div1);}
      if(i==4){
        row5.push(div1);}

      //alert("here");
      //cell.appendChild(div1);
    }



  }

}


let id = 0;
function createData(p1,p2,p3,p4,p5) {
  id += 1;
  return { id, p1,p2,p3,p4,p5};
}

let rows = [];
let bf;
var camperHash={};
var activityHash={};
function setup(){
  for(var i=0;i<campers.length;i++){
    camperHash[campers[i].ID]=i;
  }
  for(var i=0;i<activites.length;i++) {
    for (var j = 0; j < activites[i].length; j++) {
      //alert(activites[i][j].Name+(i+1));
      activityHash[activites[i][j].Name+(i+1)]=j;
    }
  }

}
function search(){
  showSchedual(campers[camperHash[prompt("Enter Camper OB#: ")]]);
}

function swap(){
  var c=camperHash[prompt("Enter Camper OB#: ")];
  var p=parseInt(prompt("enter period number"))-1;
  var temp=prompt("enter old activity name")+(p+1);
  
  var a1=activityHash[temp];
  temp=prompt("enter new activity name")+(p+1);
  //alert(temp);
  var a2=activityHash[temp];
  //alert("a2: "+a2+" a1:"+ a1 );

  if(activites[p][a2].CurCampNum+1<activites[p][a2].MaxCamperNum){
    for (var i=0;i<activites[p][a1].Roster.length;i++){
      if(activites[p][a1].Roster[i].ID===campers[c].ID){
        activites[p][a1].Roster.splice(i,1);}
    }
    activites[p][a2].Roster.push(campers[c]);
    activites[p][a2].CurNumCampers++;
    activites[p][a1].CurNumCampers--;
    if(p===0){
      campers[c].A1=activites[p][a2];}
    if(p===1){
      campers[c].A2=activites[p][a2];}
    if(p===2){
      campers[c].A3=activites[p][a2];}
    if(p===3){
      campers[c].A4=activites[p][a2];}
    if(p===4){
      campers[c].A5=activites[p][a2];}
    
  }
  //else{
    //alert("That Activity is Full");
  //}
  schedual();




}
let oneset=0;
function schedual(){
  rows=[];
  row1=[];
  row2=[];
  row3=[];
  row4=[];
  row5=[];
  generateTable();
  for(bf=0;bf<row1.length;bf++){

    rows.push(createData(row1[bf],row2[bf],row3[bf],row4[bf],row5[bf]));
  }
  ReactDOM.render([
    <div>
      <NavBar/>
      <Container>

        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
          <Button onClick={search}>Search By OB#</Button>
          <Button onClick={swap}>Swap Camper Activity</Button>
          <Button onClick={staffList}>Staff List</Button>
      </ButtonGroup>
        <br/>
        <br/>
        <br/>

          <Table>
          <TableRow><th>Period 1</th><th>Period 2</th><th>Period 3</th><th>Period 4</th><th>Period 5</th></TableRow>
          {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.p1}</TableCell>
                <TableCell>{row.p2}</TableCell>
                <TableCell>{row.p3}</TableCell>
                <TableCell>{row.p4}</TableCell>
                <TableCell>{row.p5}</TableCell>


              </TableRow>
          ))}
        </Table>
      </Container>
    </div>,],document.getElementById('root'));
}
        
function activitySignUps(){
  var i;
  for(i=0;i<campers.length;i++){
    //alert("runs");
      //campers[i].A1={};
      campers[i].A1=camperActivityAssingment(campers[i],activites,1);
      campers[i].A2=camperActivityAssingment(campers[i],activites,2);
      campers[i].A3=camperActivityAssingment(campers[i],activites,3);
      campers[i].A4=camperActivityAssingment(campers[i],activites,4);
      campers[i].A5=camperActivityAssingment(campers[i],activites,5);
  }
  
  schedual();
}
export class MyTable extends React.Component {
  //constructer(){
  //
  //}
  render() {
    if(oneset==0){
      counselorActivityAssingment(Counselors,activites);
      generateTable();
      setup();
      oneset=1;}



    schedual();
    return(
     
      <div>
       
        <br/>
        <br/>
        
        <p>runs</p>
        </div>);
  }

}
