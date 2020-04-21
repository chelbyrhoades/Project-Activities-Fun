export class Camper{
    constructor(id, Nname, Lname,Fname,number,p1,p2,p3,p4,p5) {
        this.ID=id;
        this.nName=Nname;
        this.lName=Lname;
        this.fName=Fname;
        this.Num=number;
        this.P1=p1;
        this.P2=p2;
        this.P3=p3;
        this.P4=p4;
        this.P5=p5;
        this.A1="none";
        this.A2="none";
        this.A3="none";
        this.A4="none";
        this.A5="none";
    }
    showSchedual(){
        let info=document.getElementById("data");
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
        let text5 = document.createTextNode(this.A5);

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