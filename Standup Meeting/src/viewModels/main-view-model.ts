import viewModelBaseModule = require("../views/common/view-model-base");  

export class MainViewModel extends viewModelBaseModule.ViewModelBase {   
    private _message: string;
        
    constructor() {
        super(); 
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
}
