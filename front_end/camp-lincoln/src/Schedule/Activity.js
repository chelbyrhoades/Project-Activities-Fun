export class Activity{

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
    getName(){
        return this.Name;
    }

}