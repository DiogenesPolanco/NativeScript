import constantsModule = require("./constants");
import notificationsModule = require("./notifications");  

 export class Service { 
    get isAuthenticated(): boolean { 
        fetch(constantsModule.apiTestPost, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ form: { "comments" : "Test" } }) 
        }).then(response => {
            
            console.log(response.url);   
            return response.url !== undefined;   
        }, error => {
                
            return false;
        }); 
        return false;  
    } 
    login(username: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => { 
            fetch(constantsModule.apiTestGet).then(response =>{
               resolve(response.url);   
            }, error => {
                 Service.showErrorAndReject(error, reject);
            });  
        });
    }
    private static showErrorAndReject(error: any, reject: (e: any) => void) {
        notificationsModule.showError(error.message);
        reject(error);
    }
} 
export var service = new Service();
