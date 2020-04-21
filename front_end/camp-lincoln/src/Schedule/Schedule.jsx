import React from "react";
//import ReactTable from "react-table";

//import SimpleListMenu from '../menu/SimpleMenuListMenu';
import './Schedule.css'
class Activity{

  constructor(id,name, period, staffnum, maxcampnum, mincampnum,criticalstaff,canteach,canassist,cantdo){
    this.Name=name;
    this.ID=id;
    this.Period=period;
    this.StaffNum=staffnum;
    this.MaxCamperNum=maxcampnum;
    this.MinCampNum=mincampnum;
    this.CurCampNum=0;
    this.Roster=[];
    this.CriticalStaff=criticalstaff;
    this.CanTeach=canteach;
    this.CanAssist=canassist;
    this.CantDo=cantdo;
    this.Staff=[];
    //alert(name);
  }

}
let Archery1= new Activity("archery1", "Archery",1,1,5,3,["William Dunn"],["William Dunn"],["Jack Dunn"],["Nick Dunn"]);
let Riding1= new Activity("Riding1", "Riding",1,1,5,3,["Jack Dunn"],["Jack Dunn"],["Nick Dunn"],["William Dunn"]);
let Rifelry1=new Activity("Rifelry1", "Rifelry",1,1,5,3,["Nick Dunn"],["Nick Dunn"],["Jack Dunn"], ["William Dunn"]);
var activites=[[Archery1,Riding1,Rifelry1],[Riding1,Archery1,Rifelry1],[Archery1,Riding1,Rifelry1],[Riding1,Archery1,Rifelry1],[Archery1,Riding1,Rifelry1]];
//Counselor
class Counselor{
  constructor(name, cabin ) {
    this.Name=name;
    this.Cabin=cabin;
    this.A1="none";
    this.A2="none";
    this.A3="none";
    this.A4="none";
    this.A5="none";
  }
}

let C1= new Counselor("William Dunn","Gopher");
let C2= new Counselor("Jack Dunn","Gopher");
let C3= new Counselor("Nick Dunn","Gopher");
let Counselors=[C1,C2,C3];
//Functions
function counselorActivityAssingment(counselors,acts) {
 // alert("here");
  var p;
  for(p=0;p<5;p++){
    var a;
    for(a=0;a<activites[p].length;a++){
      //alert("here");
      var c;
      for(c=0;c<Counselors.length;c++){
        //assign counselors to activities based on the number needed and the activities canTeach canAssist CantDo
        var A;
        // alert("here");
        for(A=0;A<activites[p][a].CanTeach.length;A++){
          if(Counselors[c].Name==activites[p][a].CanTeach[A]){
            activites[p][a].Staff.push(Counselors[c]);
            //       alert(activites[p][a].Name+" "+Counselors[c].Name);
            if(p==0){
              Counselors[c].A1=activites[p][a];
            }
            if(p==1){
              Counselors[c].A2=activites[p][a];
            }
            if(p==2){
              Counselors[c].A3=activites[p][a];
            }
            if(p==3){
              Counselors[c].A4=activites[p][a];
            }
            if(p==4){
              Counselors[c].A5=activites[p][a];
            }
          }
        }
      }
    }
  }

}

function camperActivityAssingment(Camper,prefrences, acts, period){
  //loop through the three prefrences for an activity period and place them in an activity that is in that list that has space for them
  var i;
  //todo add in a update to counselor

  for(i=0;i<3;i++){

    var j;

    for(j=0;j<acts[period-1].length;j++){

      if(prefrences[i]==acts[period-1][j].Name){
        if(acts[period-1][j].CurCampNum<acts[period-1][j].MaxCamperNum){
          //var temp;
          // add camper to the roster of the activity
          acts[period-1][j].Roster.push(Camper);
          //alert(Camper.fName);
          acts[period-1][j].CurCampNum= acts[period-1][j].Roster.length;
          // return the activity
          //alert(acts[period-1][j].Name+" "+acts[period-1][j].Roster.length);
          return acts[period-1][j];
        }
      }
    }

  }
  //}

}
let N=0;
class Camper{
  constructor(id, Nname, Lname,Fname,number,p1,p2,p3,p4,p5) {
    this.ID=id;
    this.nName=Nname;
    this.lName=Lname;
    this.fName=Fname;
    this.Num=N;
    N++;
    this.A1=camperActivityAssingment(this,p1,activites,1);
    this.A2=camperActivityAssingment(this,p2,activites,2);
    this.A3=camperActivityAssingment(this,p3,activites,3);
    this.A4=camperActivityAssingment(this,p4,activites,4);
    this.A5=camperActivityAssingment(this,p5,activites,5);
  }
  showSchedual(){
    alert("runs");
    /*let info=document.getElementById("data");
    //alert("this");
    // var newEl = document.createElement('p');

    info.innerText=("OB #: "+this.ID+"  Nickname: "+this.nName+"  Last Name: "+this.lName+"  First Name: "+this.fName);

    let subtable=document.getElementById("td1");

    //let row = subtable.insertRow();
    //let cell = row.insertCell();
    let text1 = document.createTextNode(this.A1);
    let text2 = document.createTextNode(this.A2);
    let text3 = document.createTextNode(this.A3);
    let text4 = document.createTextNode(this.A4);
    let text5 = document.createTextNode(this.A5);*/

    /*cell.appendChild(text1);
    cell = row.insertCell();
    cell.appendChild(text2);
    cell = row.insertCell();
    cell.appendChild(text3);
    cell = row.insertCell();
    cell.appendChild(text4);
    cell = row.insertCell();
    cell.appendChild(text5);*/

    //generateTable()
    //  var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    //myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    //var mywind = window.open("roster.html");
    //mywind.document.open();




  }
}
//var Archery1 = new Activity("archery1","Archery",1,3,4,2,0);
let mountains = [
  { period_1: "Archery1", period_2: "watersking2", period_3: "ultimate3",period_4: "sailing4" },
  { period_1: "Riding1", period_2: "fimo2", period_3: "sailing3",period_4: "fimo4" },

];

var c1= new Camper("01-01","Tom","Dunn","Tommy",0,['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry']);
var c2= new Camper("01-02","Nick","Dunn","Nicky",1,['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry']);
var c3= new Camper("01-03","Pete","Dunn","Peter",2,['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry']);
var c4= new Camper("01-04","Will","Dunn","William",3,['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry']);
var c5= new Camper("01-05","Jack","Dunn","Jack",4,['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry'],['Archery','Riding','Rifelry']);

let campers=[c1,c2,c3,c4,c5];
let row1= [];
let row2= [];
let row3= [];
let row4= [];
let row5= [];

/*function camperActivityAssingment(Camper,prefrences, acts, period){
  //loop through the three prefrences for an activity period and place them in an activity that is in that list that has space for them
  var i;
  //todo add in a update to counselor

  for(i=0;i<3;i++){

    var j;

    for(j=0;j<acts[period-1].length;j++){

      if(prefrences[i]===acts[period-1][j].Name){
        if(acts[period-1][j].CurCampNum<acts[period-1][j].MaxCamperNum){
          //var temp;
          // add camper to the roster of the activity
          acts[period-1][j].Roster.push(Camper);
          acts[period-1][j].CurCampNum= acts[period-1][j].Roster.length;
          // return the activity
          //alert(acts[period-1][j].Name+" "+acts[period-1][j].Roster.length);
          return acts[period-1][j];
        }
      }
    }

  }
  //}

}
function counselorActivityAssingment(counselors,acts) {

  //
  // alert("here");
  var p;
  for(p=0;p<5;p++){
    var a;
    for(a=0;a<acts[p].length;a++){
      //alert("here");
      var c;
      for(c=0;c<counselors.length;c++){
        //assign counselors to activities based on the number needed and the activities canTeach canAssist CantDo
        var A;
        // alert("here");
        for(A=0;A<acts[p][a].CanTeach.length;A++){
          if(counselors[c].Name===acts[p][a].CanTeach[A]){
            acts[p][a].Staff.push(counselors[c]);
            //       alert(activites[p][a].Name+" "+Counselors[c].Name);
            if(p===0){
              counselors[c].A1=acts[p][a];
            }
            if(p===1){
              counselors[c].A2=acts[p][a];
            }
            if(p===2){
              counselors[c].A3=acts[p][a];
            }
            if(p===3){
              counselors[c].A4=acts[p][a];
            }
            if(p===4){
              counselors[c].A5=acts[p][a];
            }
          }
        }
      }
    }
  }

}*/
function makeButton(camp, campers){
  //alert("jere");

  // var br = React.createElement("br");
 // var t=React.createTextNode(camp.nName);
  var x =camp.Num;
  //alert('x: '+x);
 let t= React.createElement("text",null,camp.nName);
  let but=React.createElement("p",{ onClick:campers[x].showSchedual}, [camp.nName]);
  //alert("jere");
  //but.appendChild(t);
  //but.setAttribute('id',x);
  //but.addEventListener("click", function(){
    //alert(but.id);
    //campers[but.id].showSchedual();
  //});
  return but;

  // but.innerHTML=element1[key1][i].nName;





}
//let Table=<table id="table"> </table>;
function generateTable() {
  counselorActivityAssingment(Counselors,activites);

  //const table1 = React.createElement("table");
  //table1.setAttribute("id","table");
  //let table=document.getElementById('table');
  //table.setAttribute('id',"table");
  //alert("run");
  var i;
  var j;
 // var row = table.insertRow(0);
 //table.insertRow();
  //table.insertRow();
  //alert("activities.length: "+activites.length);
  for(i=0;i<activites.length;i++){
    // alert("period: "+i);
    // alert("activites[i].length: "+activites[i].length);
    for(j=0;j<activites[i].length;j++){
     // row=table.rows[j+1];
      //alert(j);
      //let cell = row.insertCell();

     // div1.className='dropdown';
      var btn = React.createElement("button",{id:'dropbtn'},activites[i][j].Name);
      //var t= React.createTextNode(this.activites[i][j].Name);
      //alert((activites[1][j].Name));
      //btn.innerHTML=activites[i][j].Name;
      //btn.setAttribute('id',"dropbtn");
      //let div2 = React.createElement('div',{className:'dropdown-content'},);
      //div2.className='dropdown-content';

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

let rows = [

];
let bf;

export class MyTable extends React.Component {

  render() {

    generateTable(this.activites,this.campers);
    for(bf=0;bf<row1.length;bf++){

      rows.push(createData(row1[bf],row2[bf],row3[bf],row4[bf],row5[bf]));
    }
    return(
        <table>
          {rows.map(row => (
              <tr key={row.id}>
                <td>{row.p1}</td>
                <td>{row.p2}</td>
                <td>{row.p3}</td>
                <td>{row.p4}</td>
                <td>{row.p5}</td>
              </tr>
          ))}
        </table>
    )
  }

}

