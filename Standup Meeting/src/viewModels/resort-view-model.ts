import viewModelBaseModule = require("../views/common/view-model-base");  
import constantsModule = require("../utils/constants");

export class ResortViewModel extends viewModelBaseModule.ViewModelBase {   
    private _message: string;
    private _total: number;
    private _days: number;
    private _hours: number;
    private _minutes: number;
    private _seconds: number;
    private _timer:any;
    
    constructor() {
        super(); 
    } 
     get timer(): any {
        return this._timer;
    }

    set timer(value: any) { 
        console.log(value);
        if (this._timer !== value) {
            this._timer = value;
            this.notifyPropertyChange("timer", value);
        }
    }
    get message(): string {
        return this._message;
    }

    set message(value: string) {  
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }
    get total(): number {
        return this._total;
    }

    set total(value: number) { 
        if (this._total !== value) {
            this._total = value;
            this.notifyPropertyChange("total", value);
        }
    }
    
    get days(): number {
        return this._days;
    }

    set days(value: number) { 
        if (this._days !== value) {
            this._days = value;
            this.notifyPropertyChange("days", value);
        }
    }
     get hours(): number {
        return this._hours;
    }

    set hours(value: number) { 
        if (this._hours !== value) {
            this._hours = value;
            this.notifyPropertyChange("hours", value);
        }
    }
    
    get minutes(): number {
        return this._minutes;
    }

    set minutes(value: number) { 
        if (this._minutes !== value) {
            this._minutes = value;
            this.notifyPropertyChange("minutes", value);
        }
    }
    
    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) { 
        if (this._seconds!== value) {
            this._seconds = value;
            this.notifyPropertyChange("seconds", value);
        }
    }
     
    public updateClock() {  
        this.total= Date.parse(constantsModule.endtime) - Date.parse(new Date().toString());
        
        this.seconds= Math.floor( ( this.total/1000) % 60 );
        this.minutes= Math.floor( ( this.total/1000/60) % 60 );
        this.hours= Math.floor( ( this.total/(1000*60*60)) % 24 );
        this.days= Math.floor(  this.total/(1000*60*60*24) ); 
         
        this.message= this.days + " Days " + 
                            this.hours + " Hours " + 
                            this.minutes + " Minutes " + 
                            this.seconds + " Seconds ";
                     
        if(this.total <= 0){
            clearInterval(this.timer);
        } 
    } 
}
